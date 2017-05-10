let icons = require('./dist/simple-icons.json').icons;

/**
 * Replacing popular brands in text on svg icons of them
 * 
 * @param {string} text 
 * @returns {string}
 */
module.exports = function brandify(text) {
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
