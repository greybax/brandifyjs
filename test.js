'use strict';

const brandify = require('./src/index');
const helpers = require('./src/helpers');
const chai = require('chai');
const chaiFiles = require('chai-files');

const expect = chai.expect;
const file = chaiFiles.file;

chai.use(chaiFiles);

describe('helpers', () => {
  describe('prepareSimpleIconsJson():', () => {
    it('should generate dist/simple-icons.json', (done) => {
      helpers.prepareSimpleIconsJson();
      expect(file('./dist/simple-icons.json')).to.exist;
      done();
    });
  });
  describe('svgPatternReplacer(name, color):', () => {
    it('should return empty string', (done) => {
      let str = helpers.svgPatternReplacer();
      expect(str).is.empty;
      done();
    });
    it('should return empty color', (done) => {
      let str = helpers.svgPatternReplacer('aaa');
      expect(str).is.equal('class="svg-brandify brandify-icon-aaa" ');
      done();
    });
    it('should return result string with lowercase and without spaces', (done) => {
      let str = helpers.svgPatternReplacer('AAA BBB', '000');
      expect(str).is.equal('class="svg-brandify brandify-icon-aaabbb" fill="#000" ');
      done();
    });
  });
  describe('insertTo(text, position, replacement):', () => {
    it('should return empty string', (done) => {
      let str = helpers.insertTo();
      expect(str).is.empty;
      done();
    });
    it('should return modified string', (done) => {
      let str = helpers.insertTo('some text here', 4, 'body');
      expect(str).is.equal('somebody text here');
      done();
    });
  });
});

const htmlText = `
  <a class="google icon">google</a>
`;

const htmlAndPlainText = `
  <a class="google icon">google</a> google
`;

const nestedHtmlTags = `
  <p class="linkedin class-icon">
    <a class="google icon">
      google
    </a>
    google
  </p>
  youtube
`;

const list = `<ul class="linkedin class-icon">
  <li class="google icon">
   google <a class="google icon"> google </a>
  </li>
</ul>
`;

describe('brandify', () => {
  it('should return empty string', (done) => {
    let str = brandify();
    expect(str).is.empty;
    done();
  });

  it('should insert before brand names with icons', (done) => {
    let str = brandify('I like github!', 'before');
    expect(str).is.not.equal('I like github!');
    expect(str).is.not.contain('I like github <svg');
    expect(str).is.contain('</svg>\n&nbsp;GitHub');
    expect(str).is.contain('class="svg-brandify brandify-icon-github"');
    done();
  });
  it('should replace brand names with icons w/o params (by default)', (done) => {
    let str = brandify('I like github!');
    expect(str).is.not.equal('I like github!');
    expect(str).is.not.contain('I like github');
    expect(str).is.contain('class="svg-brandify brandify-icon-github"');
    done();
  });
  it('should replace brand names with icons w/ "replace" param', (done) => {
    let str = brandify('I like github!', 'replace');
    expect(str).is.not.equal('I like github!');
    expect(str).is.not.contain('I like github');
    expect(str).is.contain('class="svg-brandify brandify-icon-github"');
    done();
  });
  it('should insert after brand names with icons', (done) => {
    let str = brandify('I like github!', 'after');
    expect(str).is.not.equal('I like github!');
    expect(str).is.not.contain('I like <svg');
    expect(str).is.contain('I like GitHub&nbsp;<svg');
    expect(str).is.contain('class="svg-brandify brandify-icon-github"');
    done();
  });
});
