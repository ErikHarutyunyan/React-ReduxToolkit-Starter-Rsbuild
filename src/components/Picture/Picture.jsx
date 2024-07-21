import parseMetaString from '@/utils/parseMetaString';

const Picture = ({
  meta,
  sizes = '100vw',
  alt = '',
  loading = 'lazy',
  imageClass = '',
  pictureClass = '',
}) => {
  // Ensure meta is always an array
  const metaArray = typeof meta !== 'string' ? [meta] : parseMetaString(meta);
  const { sources, img: fallback } = metaArray[0];
  return (
    <div style={{ maxWidth: `${fallback.w}px` }}>
      <picture className={pictureClass}>
        {Object.entries(sources).map(([type, srcSet]) => {
          return (
            <source
              key={type}
              type={`image/${type}`}
              sizes={sizes}
              srcSet={
                typeof meta !== 'string'
                  ? srcSet
                  : srcSet.map(m => `${m.src} ${m.w}w`).join(', ')
              }
            />
          );
        })}
        <img
          src={fallback.src}
          alt={alt}
          loading={loading}
          className={imageClass}
          width={fallback.w}
          height={fallback.h}
        />
      </picture>
    </div>
  );
};

export default Picture;
