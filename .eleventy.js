const caniuse = require('./src/caniuse');

module.exports = (eleventyConfig, pluginNamespace) => {
  eleventyConfig.namespace(pluginNamespace, () => {
    eleventyConfig.addShortcode('caniuse', (feature) => caniuse(feature))
  })
}
