const parseMetaString = metaString => {
  const [path, params] = metaString.split('?');
  const query = new URLSearchParams(params);

  const sizes = query.get('w').split(';').map(Number);
  const formats = query.get('format').split(';');

  const sources = formats.reduce((acc, format) => {
    acc[format] = sizes.map(w => ({
      src: `${path}?w=${w}&format=${format}`,
      w,
    }));
    return acc;
  }, {});

  const fallback = {
    src: `${path}?w=${sizes[0]}&format=${formats[formats.length - 1]}`,
    w: sizes[sizes.length - 1],
  };

  return [{ sources, img: fallback }];
};

export default parseMetaString;
