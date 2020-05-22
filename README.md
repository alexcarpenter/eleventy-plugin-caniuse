# eleventy-plugin-caniuse

> An Eleventy plugin to embed [can I use](https://caniuse.com) data on your pages.

## Installation

```bash
$ npm i @alexcarpenter/eleventy-plugin-caniuse
```

```js
const caniuse = require('@alexcarpenter/eleventy-plugin-caniuse');

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(caniuse);
}
```

## Usage

```njk
{% caniuse 'css-grid' %}
```

## License

MIT License © [Alex Carpenter](https://alexcarpenter.me)
