# BrandifyJS

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

We are all to used to use different kind of emojies. Each of them has some code which transforms to icon.
So what about transform typical words in text to icon? This tool is all about it! :sunny: :surfer:

> This is a JS library which helps you to add company icons in your text.
Icons are using from cool repository :cherries: :rocket: - [simple-icons](https://github.com/danleech/simple-icons) 

## Where I can use it?

This tool can work as with plain text and with html without any modification of DOM. Replace only those `#text nodes` where finds brand names.

## Playground:

You can try BrandifyJS web interface: [greybax.github.io/brandifyjs](https://greybax.github.io/brandifyjs) 

## How to Use:

### 1. NPM

```
npm install brandifyjs
```

```js
const brandify = require('brandifyjs');

let myText = `
This is a text to brand icons replaced for lot of famous brands companies, technologies and tools...
Twitter, Github and more ...
Thanks for cool icons to simple icons!
`;

let newText = brandify(myText);
```

**Output**:

This is a text to brand icons replaced for lot of famous brands companies, tehnologies and tools...
<style>
.svg-brandify {
    max-width: 2rem;
}
</style>
<svg class="svg-brandify brandify-icon-twitter" fill="#1DA1F2"  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z" fill-rule="nonzero"/></svg>, <svg class="svg-brandify brandify-icon-github" fill="#181717"  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8"/></svg> and more ...
Thanks for cool icons to <svg class="svg-brandify brandify-icon-simpleicons" fill="#111111"  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M10 15h3v1H3v-1h3v-4h1v4h2v-4h1v4zm-6-3.02V12c0 .74.2 1.432.552 2.027H3.43C3.152 13.407 3 12.72 3 12v-.02h1zM8 7c2.76 0 5 2.24 5 5 0 .72-.153 1.407-.43 2.027h-1.12c.35-.595.552-1.288.552-2.027 0-2.208-1.792-4-4-4V7zm3 3H5v1h6v-1zM8 8C5.792 8 4 6.208 4 4s1.792-4 4-4 4 1.792 4 4h-1c0-1.656-1.344-3-3-3S5 2.344 5 4s1.344 3 3 3v1zm0-6c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm0 1c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"/></svg>!

**HTML Result**:
```html
This is a text to brand icons replaced for lot of famous brands companies, tehnologies and tools...
<svg class="svg-brandify brandify-icon-twitter" fill="#1DA1F2"  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z" fill-rule="nonzero"/></svg>, <svg class="svg-brandify brandify-icon-github" fill="#181717"  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8"/></svg> and more ...
Thanks for cool icons to <svg class="svg-brandify brandify-icon-simpleicons" fill="#111111"  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M10 15h3v1H3v-1h3v-4h1v4h2v-4h1v4zm-6-3.02V12c0 .74.2 1.432.552 2.027H3.43C3.152 13.407 3 12.72 3 12v-.02h1zM8 7c2.76 0 5 2.24 5 5 0 .72-.153 1.407-.43 2.027h-1.12c.35-.595.552-1.288.552-2.027 0-2.208-1.792-4-4-4V7zm3 3H5v1h6v-1zM8 8C5.792 8 4 6.208 4 4s1.792-4 4-4 4 1.792 4 4h-1c0-1.656-1.344-3-3-3S5 2.344 5 4s1.344 3 3 3v1zm0-6c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm0 1c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"/></svg>!
```

### 2. `<script></script>` tag

```html
<script src="dist/brandifyjs-browser.js"></script>

...
<script type="text/javascript">
    brandify(text, params);
</script>
```

## API

* `brandify(text)` or `brandify(text, 'replace')`
> Just replace all matched text on their icons
* `brandify(text, 'before')`
> Will insert icons before matched text
* `brandify(text, 'after')`
> Will insert icons after matched text

## Development

Clone the repo.
    
```
// install npm and jspm scripts
npm run install-all

// create modified dist/simple-icons.json
npm run init

// create browser script in dist/brandifyjs-browser.js
npm run browserify

// starts lite-server with index.html
npm run dev
```

## Test

```
// run mocha tests from test.js
npm test
```

## License

MIT © [Aleksandr Filatov](https://alfilatov.com)

[npm-url]: https://npmjs.org/package/brandifyjs
[npm-image]: https://img.shields.io/npm/v/brandifyjs.svg

[travis-url]: https://travis-ci.org/greybax/brandifyjs
[travis-image]: https://img.shields.io/travis/greybax/brandifyjs/master.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/greybax/brandifyjs
[coveralls-image]: https://img.shields.io/coveralls/greybax/brandifyjs/master.svg?style=flat-square

[depstat-url]: https://david-dm.org/greybax/brandifyjs
[depstat-image]: https://david-dm.org/greybax/brandifyjs.svg?style=flat-square

[depstat-dev-url]: https://david-dm.org/greybax/brandifyjs
[depstat-dev-image]: https://david-dm.org/greybax/brandifyjs/dev-status.svg?style=flat-square