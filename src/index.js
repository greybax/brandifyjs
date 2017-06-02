'use strict';

const icons = require('../dist/simple-icons.json').icons;
const isHtml = require('is-html');

/**
 * Replacing popular brands in text on svg icons of them
 * 
 * @example
 *
 * 1. brandify(text) or brandify(text, 'replace')
 * 2. brandify(text, 'before')
 * 3. brandify(text, 'after')
 *
 * @param {string} text
 * @param {any} params
 * @returns {string}
 */
module.exports = function brandify(text, params) {
  if (!text) {
    return '';
  }

  // string as html
  if (isHtml(text)) {
    let result = '';

    const div = document.createElement('div');
    div.innerHTML = text;
    const elements = div.childNodes;

    for (let i = 0; i < elements.length; i++) {
      if (elements[i].innerText !== undefined) {
        elements[i].innerHTML = replaceIconsInPlainText(elements[i].innerText, params);
        result += elements[i].outerHTML;
      } else {
        result += replaceIconsInPlainText(elements[i].textContent, params);
      }
    }

    return result;
  }

  // plain string
  return replaceIconsInPlainText(text, params);
};

/**
 * Replace any coincidences from simple-icons names in plain text
 * 
 * @param {string} text 
 * @param {any} params 
 * @returns {string}
 */
function replaceIconsInPlainText(text, params) {
  if (!text) {
    return '';
  }

  // do not replace URLs
  // regex pattern from here: https://stackoverflow.com/a/8218223/2173016
  const urlPattern = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
  if (text.match(urlPattern)) {
    return text;
  }

  for (let i = 0; i < icons.length; i++) {
    const title = icons[i].title;
    let searchValue = '';

    if (title.toLowerCase() === 'google') {
      searchValue = new RegExp(/google/gi);
    } else if (title.toLowerCase() === 'google+') {
      searchValue = new RegExp(/google\+/gi);
    } else {
      searchValue = new RegExp(`\\b(${title})\\b`, 'gi');
    }

    if (text.match(searchValue)) {
      if (typeof params === 'undefined' || params === 'replace') {
        text = text.replace(searchValue, icons[i].svg);
      } else if (params === 'before') {
        text = text.replace(searchValue, `${icons[i].svg}&nbsp;${title} `);
      } else if (params === 'after') {
        text = text.replace(searchValue, `${title}&nbsp;${icons[i].svg}`);
      }
    }
  }

  return text;
}
