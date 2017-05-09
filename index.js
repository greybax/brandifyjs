let icons = require('./dist/simple-icons.json').icons;

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

  function exec(text) {
    if (!text) {
      throw new Error('text should be initialized with not empty value');
    }

    for (let i = 0; i < icons.length; i++) {
      const title = icons[i].title;
      const searchValue = new RegExp(`\\b(${title})\\b`, 'gi');

      if (title === 'Line') {
        continue;
      }

      if (text.match(searchValue)) {
        text = text.replace(searchValue, icons[i].svg);
      }
    }

    return text;
  };

}
