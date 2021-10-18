const importIcons = (r) => {
    let images = {};
    r.keys().map(item => {
        images[item.replace('./', '')] = r(item);
        return 0;
    });
    return images;
}

export const icons = importIcons(require.context('./', false, /\.svg/));

export default icons;
