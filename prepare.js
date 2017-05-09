let icons = require('./jspm_packages/github/danleech/simple-icons@master/_data/simple-icons.json').icons;
const fs = require('fs');

module.exports = function prepareSimpleIconsJson() {
  for (let i = 0; i < icons.length; i++) {
    let name = icons[i].title
      .toLowerCase()
      .replace(/ |[.]|[-]|[’]|[!]/g, '')
      .replace(/[+]/g, 'plus');
    const content = fs.readFileSync(`./jspm_packages/github/danleech/simple-icons@master/icons/${name}.svg`, 'utf8');
    icons[i].svg = content;
  }

  fs.writeFileSync('./dist/simple-icons.json', `{"icons": ${JSON.stringify(icons)}}`, 'utf-8');
};
