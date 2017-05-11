'use strict';

const icons = require('../dist/simple-icons.json').icons;
const helpers = require('./helpers');

/**
 * Replacing popular brands in text on svg icons of them
 * 
 * @param {string} text
 * @param {any} params
 * @returns {string}
 */
module.exports = function brandify(text, params) {
  if (!text) {
    throw new Error('text should be initialized with not empty value');
  }

  for (let i = 0; i < icons.length; i++) {
    const title = icons[i].title;
    const searchValue = new RegExp(`\\b(${title})\\b`, 'gi');

    if (text.match(searchValue)) {
      if (typeof params === 'undefined' || params === 'replace') {
        text = text.replace(searchValue, icons[i].svg);
      } else if (params === 'before') {
        text = text.replace(searchValue, `${title}&nbsp;${icons[i].svg}`);
      } else if (params === 'after') {
        text = text.replace(searchValue, `${icons[i].svg}&nbsp;${title} `);
      }
    }
  }

  return text;
};
