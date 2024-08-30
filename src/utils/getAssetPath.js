const getAssetPath = (path) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
    return `${basePath}${path}`;
};

export default getAssetPath;