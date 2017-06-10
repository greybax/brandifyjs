'use strict';

const icons = require('../dist/simple-icons.json').icons;
const isHtml = require('is-html');
const Stack = require('stack-data').Stack;

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
      result += treeWalker(elements[i].outerHTML);
    }

    return result;
  }

  // plain string
  return replaceIconsInPlainText(text, params);
};

function treeWalker(node, path) {
  let stack = new Stack();
  stack = walkDown(node, stack);
  let htmlString = walkUp(stack);
  return htmlString;
}

function walkDown(node, stack) {
  if (isHtml(node)) {
    const div = document.createElement('div');
    div.innerHTML = node;
    stack.push(div.childNodes[0]);

    return walkDown(div.childNodes[0].innerHTML.trim(), stack);
  } else {
    stack.push(replaceIconsInPlainText(node));

    return stack;
  }
}

function walkUp(stack, htmlString) {
  if (stack.size > 0) {
    let node = stack.pop();

    const div = document.createElement('div');
    // if took first element from stack
    if (!htmlString) {
      div.innerHTML = node;
      return walkUp(stack, div.innerHTML);
    } else {
      div.innerHTML = htmlString;
      node.innerHTML = div.childNodes[0].outerHTML;
      return walkUp(stack, node.outerHTML);
    }
  } else {
    return htmlString;
  }
}

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
