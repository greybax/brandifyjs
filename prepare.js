let icons = require('./jspm_packages/github/danleech/simple-icons@master/_data/simple-icons.json').icons;
const fs = require('fs');

/**
 * generate string with class and fill color for svg element
 * 
 * @param {string} name 
 * @param {number} hex format color
 * @returns {string}
 */
function svgPatternReplacer(name, color) {
  name = name
    .toLowerCase()
    .replace(' ', '');

  return `class="svg-brandify brandify-icon-${name}" fill="#${color}" `;
};

/**
 * create new string with replacement string
 * 
 * @param {string} text 
 * @param {number} position 
 * @param {string} replacement 
 * @returns {string}
 */
function insertTo(text, position, replacement) {
  return [text.slice(0, position), replacement, text.slice(position)].join('');
};

/**
 * Create simple-icons.json with some modifications (add .svg property) in /dist folder
 */
module.exports = function prepareSimpleIconsJson() {
  for (let i = 0; i < icons.length; i++) {
    let name = icons[i].title
      .toLowerCase()
      .replace(/ |[.]|[-]|[’]|[!]/g, '')
      .replace(/[+]/g, 'plus');
    const color = icons[i].hex;
    const content = fs.readFileSync(`./jspm_packages/github/danleech/simple-icons@master/icons/${name}.svg`, 'utf8');

    const replacer = svgPatternReplacer(name, color);
    const svg = insertTo(content, '<svg'.length + 1, replacer);
    
    icons[i].svg = svg;
  }

  fs.writeFileSync('./dist/simple-icons.json', `{"icons": ${JSON.stringify(icons)}}`, 'utf-8');
};
