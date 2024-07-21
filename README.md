# React-Redux Rsbuild Starter Project

Welcome to the React-Redux Rsbuild Project! This repository provides a solid foundation for building scalable and maintainable React applications with Redux for state management. This starter includes essential libraries and configurations to get you up and running quickly.

### Using Rsbuild

This project uses [Rsbuild](https://rsbuild.dev/) as the build tool. Rsbuild is a modern build tool that offers fast and efficient bundling, leveraging the power of Rspack.

## Features

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for JavaScript apps.
- **Styled Components**: Visual primitives for the component age.
- **SVGR**: Transform SVGs into React components.
- **Styled Components**: Visual primitives for the component age.
- **LightningCSS**: A fast, modern CSS processing tool.
- **Image Compression**: Compress images to reduce load times.
- **Google Analytics**: Integrate Google Analytics for tracking.
- **Open Graph**: Add Open Graph meta tags to enhance social media sharing.
- **Gzip and Brotli Compression**: Improve performance by compressing files.

## Getting Started

### Prerequisites

Make sure you have the following software installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [Yarn](https://yarnpkg.com/) (or npm)

### Installation

1. Clone the repository:

   ```bash
    git clone https://github.com/ErikHarutyunyan/React-ReduxToolkit-Starter-Rsbuild.git
    cd React-ReduxToolkit-Starter-Rsbuild
    ```
2.  Install dependencies:

	```properties  
	yarn install
	```
	Or if you prefer npm:

	```properties  
	npm install
	```

### Configuration

1.  Copy the `.env.example` file to `.env` and fill in the necessary environment variables:

	```bash
	cp .env.example .env
	```
	Update the `.env` file with your configuration.
    

### Scripts

* **Development**: Start the development server.
    
	```properties  
	yarn dev
	```
	Or:

	```properties  
	npm run dev
	```
    
* **Build**: Create a production build.
    
	```properties  
	yarn build
	```
	Or:

	```properties  
	npm run build
	```
    
* **Linting and Formatting**:

	This project uses ESLint and Prettier for linting and formatting. Make sure to run the linting and formatting scripts before committing your code.

	```properties  
	yarn lint
	yarn lint:fix
	yarn format
	yarn format:fix
	```
	Or:

	```properties  
	npm run lint
	npm run lint:fix
	npm run format
	npm run format:fix
	```
        
* **Generate Components**: Quickly generate React components.

	```properties
	yarn component <ComponentName>
	yarn page <PageName>
	yarn layout <LayoutName>
	yarn redux <ReduxName>
	```

	```properties
	npm run component <ComponentName>
	npm run page <PageName>
	npm run layout <LayoutName>
	npm run redux <ReduxName>
	```
    
* **Generate Sitemap**: Generate a sitemap for the project.
    
	```properties
	yarn generate-sitemap
	```
	```properties
	npm run generate-sitemap
	```
    
### Project Structure
```
├── public
│   ├── icon
│   ├── _redirects
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── app
│   ├── assets
│   ├── components
│   ├── containers
│   ├── data
│   ├── hooks
│   ├── pages
│   ├── router
│   ├── services
│   ├── themes
│   ├── utils
│   └── main.jsx
├── templates
│   ├── default
│   │   ├── index.jsx
│   │   ├── TemplateName.jsx
│   │   ├── TemplateName.lazy.jsx
│   │   ├── TemplateName.styled.jsx
│   ├── layout
│   │   ├── index.jsx
│   │   ├── TemplateName.jsx
│   ├── page
│   │   ├── index.jsx
│   │   ├── TemplateName.jsx
│   │   ├── TemplateName.lazy.jsx
│   │   ├── TemplateName.styled.jsx
│   ├── redux
│   │   ├── index.jsx
│   │   ├── TemplateName.jsx
│   │   ├── TemplateName.lazy.jsx
│   │   ├── TemplateName.styled.jsx
├── .env.example
├── .gitignore
├── .eslintrc.cjs
├── .prettierignore
├── .prettierrc
├── generate-react-cli.json
├── generate-sitemap.cjs
├── jsconfig.json
├── package.json
├── README.md
└── rsbuild.config.js
```
### Environment Variables

* **RSDOCTOR**: Enable RSDOCTOR plugin (`true` or `false`).
* **MILLION_LINT**: Enable Million Lint plugin (`true` or `false`).
* **MILLION_COMPILER**: Enable Million Compiler plugin (`true` or `false`).
* **GZIP**: Enable Gzip compression (`true` or `false`).
* **BROTLI**: Enable Brotli compression (`true` or `false`).
* **BUNDLE_ANALYZE**: Enable bundle analysis (`true` or `false`).
* **MODE**: Set the mode (`dev` for development or `prod`).
* **GOOGLE_ID**: Google Analytics tracking ID

### Contributing

Feel free to open issues or submit pull requests for any bugs or feature requests. Contributions are welcome!
