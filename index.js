const icons = require('./simple-icons/_data/simple-icons.json').icons;
const fs = require('fs');

/**
 * Create new brandify transform function
 *
 * @constructor
 * @return {object:{exec:fn}}
 * @returns {fn:exec}
 * @api public
 */
module.exports = function brandify(defaults) {

  /**
   * Default options
   * @api private
   */
  defaults = defaults || {};

  /**
   * expose public interface of the brandify
   *
   * @example
   *
   * text = brandify().exec(text);
   *
   * @constructor
   * @alias exec
   */
  function api() {
    return exec.apply(null, arguments);
  }

  api.exec = exec;

  return api;

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

    return ` class="svg-brandify brandify-icon-${name}" fill="#${color}" `;
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

  function exec(text) {
    if (!text) {
      throw new Error('text should be initialized with not empty value');
    }

    for (let i = 0; i < icons.length; i++) {
      const title = icons[i].title;
      const color = icons[i].hex;
      const searchValue = new RegExp(`${title}`, 'gi');

      if (title === 'Line') {
        continue;
      }

      if (text.match(searchValue)) {
        // if local env
        const content = fs.readFileSync(`simple-icons/icons/${title}.svg`, 'utf8');
        const replacer = svgPatternReplacer(title, color);
        const svg = insertTo(content, 4, replacer);
        text = text.replace(searchValue, svg);
      }
    }

    return text;
  };
}