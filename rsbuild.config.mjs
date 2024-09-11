import { defineConfig } from '@rsbuild/core'
import { pluginBabel } from '@rsbuild/plugin-babel'
import { pluginImageCompress } from '@rsbuild/plugin-image-compress'
import { pluginReact } from '@rsbuild/plugin-react'
import { pluginStyledComponents } from '@rsbuild/plugin-styled-components'
import { pluginSvgr } from '@rsbuild/plugin-svgr'

// import { pluginLightningcss } from '@rsbuild/plugin-lightningcss';
// import { pluginGoogleAnalytics } from 'rsbuild-plugin-google-analytics';
// import { pluginOpenGraph } from 'rsbuild-plugin-open-graph';

function getTools() {
	const hasEnvVars =
		process.env.RSDOCTOR === 'true' ||
		process.env.MILLION_LINT === 'true' ||
		process.env.MILLION_COMPILER === 'true' ||
		process.env.GZIP === 'true' ||
		process.env.BROTLI === 'true'

	// If no environment variables are set, return an empty object
	if (!hasEnvVars) {
		return {}
	}

	return {
		async rspack(config, { appendPlugins }) {
			// Conditionally import and append plugins based on environment variables
			if (process.env.RSDOCTOR === 'true') {
				const { RsdoctorRspackPlugin } = await import(
					'@rsdoctor/rspack-plugin'
				)
				appendPlugins(new RsdoctorRspackPlugin({}))
			}
			if (process.env.MILLION_LINT === 'true') {
				const { rspack } = await import('@million/lint')
				appendPlugins(rspack())
			}
			if (process.env.MILLION_COMPILER === 'true') {
				const { rspack } = await import('million/compiler')
				appendPlugins(rspack({ auto: true }))
			}
			if (process.env.GZIP === 'true') {
				const CompressionPlugin = await import('compression-webpack-plugin')
				appendPlugins(
					new CompressionPlugin({
						algorithm: 'gzip',
						test: /\.(js|css|svg|json)$/, // Specify file types to gzip
						threshold: 10240, // Only compress files larger than 10 KB
						minRatio: 0.8, // Only compress if the ratio is lower than 0.8
						deleteOriginalAssets: true, // Delete the original uncompressed files
					}),
				)
			}
			if (process.env.BROTLI === 'true') {
				const CompressionPlugin = await import('compression-webpack-plugin')
				appendPlugins(
					new CompressionPlugin({
						algorithm: 'brotliCompress',
						test: /\.(js|css|svg|json)$/, // Specify file types to compress with Brotli
						compressionOptions: { level: 11 }, // Set Brotli compression level
						threshold: 10240, // Only compress files larger than 10 KB
						minRatio: 0.8, // Only compress if the ratio is lower than 0.8
						deleteOriginalAssets: true, // Delete the original uncompressed files
					}),
				)
			}
		},
	}
}

export default defineConfig({
	plugins: [
		pluginReact(), // React plugin for handling React files
		pluginBabel({
			include: /\.(?:jsx|tsx)$/, // Apply Babel plugin to .jsx and .tsx files
			babelLoaderOptions(opts) {
				opts.plugins?.unshift('babel-plugin-react-compiler') // Add React compiler plugin
			},
		}),
		pluginSvgr(), // SVG handling plugin
		pluginStyledComponents(), // Styled Components plugin for handling styled-components
		pluginImageCompress([
			{ use: 'jpeg', test: /\.(?:jpg|jpeg|jpe)$/ }, // Compress JPEG images
			{ use: 'pngLossless', minQuality: 50 }, // Compress PNG images
			'ico', // Compress ICO images
		]),
		// pluginLightningcss(), // LightningCSS plugin for faster CSS processing
		// pluginGoogleAnalytics({
		//   // replace this with your Google tag ID
		//   // see: https://support.google.com/analytics/answer/9539598?hl=en
		//   id: 'G-xxxxxxxxxx', // Google Analytics tracking ID
		// }),
		// pluginOpenGraph({
		//   title: 'Rsbuild',
		//   type: 'website',
		//   url: 'https://rsbuild.dev/',
		//   image: 'https://rsbuild.dev/og-image.png',
		//   description: 'The Rspack-based build tool',
		//   twitter: {
		//     site: '@rspack_dev',
		//     card: 'summary_large_image',
		//   },
		// }),
	],
	source: {
		entry: {
			index: './src/main.jsx', // Entry point for the application
		},
		alias: {
			'@': './src',
			'@app': './src/app',
			'@router': './src/router',
			'@pages': './src/pages',
			'@components': './src/components',
			'@containers': './src/containers',
			'@hooks': './src/hooks',
			'@utils': './src/utils',
			'@helpers': './src/helpers',
			'@services': './src/services',
			'@data': './src/data',
			'@assets': './src/assets',
			'@themes': './src/themes',
			'@configs': './src/configs',
			'@constants': './src/constants',
			'@public': './public', // Define alias for directories
		},
	},
	output: {
		sourceMap: {
			js: process.env.MODE === 'dev' ? 'cheap-module-source-map' : 'eval', // Source map configuration for JavaScript
			css: process.env.MODE === 'dev' ? true : false, // Source map configuration for CSS
		},
		// manifest: true,
		overrideBrowserslist: [
			'iOS >= 9',
			'Android >= 4.4',
			'last 2 versions',
			'> 0.2%',
			'not dead',
			'not op_mini all', // Browser support configuration
		],
	},
	html: {
		template: './public/index.html', // HTML template file
	},
	tools: getTools(), // Include conditional tools based on environment variables
	performance: {
		bundleAnalyze:
			process.env.BUNDLE_ANALYZE === 'true'
				? {
					analyzerMode: 'server',
					openAnalyzer: true, // Enable bundle analysis in server mode
				}
				: {
					analyzerMode: 'disabled', // Disable bundle analysis
				},
		removeConsole: process.env.MODE === 'dev' ? false : ['log', 'warn'], // Remove console logs and warnings in production
	},
	server: {
		// port: 5173, // Optional: Specify development server port
	},
})