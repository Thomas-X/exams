// backpack.config.js
module.exports = {
    webpack: (config, options, webpack) => {
        config.node.__filename = false;
        config.node.__dirname = false;

        return config
    }
};