const getAssetPath = (path) => {
    const basePath = process.env.NODE_ENV === 'production' ? '' : '';
    return `${basePath}/${path}`;
};

export default getAssetPath;