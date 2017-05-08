# BrandifyJS

This is a JS library which helps you to add company icons in your html text. 
Icons are using from awesome repository :fireworks: :rocket: - [simple-icons](https://github.com/danleech/simple-icons) 

How to Use:

```js
const brandify = require('./index').brandify;

let myText = `
  I like to use Instagram and git every day. You can check my Github and linkedin profile if you want.
`;

let newText = brandify(myText);
```

output:

```html
  I like to use <img class="brandify-icon-instagram" src="simple-icons/icons/instagram.svg"> and <img class="brandify-icon-git" src="simple-icons/icons/git.svg"> every day. You can check my <img class="brandify-icon-git" src="simple-icons/icons/git.svg">hub and <img class="brandify-icon-linkedin" src="simple-icons/icons/linkedin.svg"> profile if you want.
```
