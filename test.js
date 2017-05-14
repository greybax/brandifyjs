'use strict';

const brandify = require('./src/index');
const helpers = require('./src/helpers');
const chai = require('chai');
const chaiFiles = require('chai-files');

let expect = chai.expect;
let file = chaiFiles.file;

chai.use(chaiFiles);

describe('helpers', function () {
  describe('prepareSimpleIconsJson():', function () {
    it('should generate dist/simple-icons.json', function (done) {
      helpers.prepareSimpleIconsJson();
      expect(file('./dist/simple-icons.json')).to.exist;
      done();
    });
  });
  describe('svgPatternReplacer(name, color):', function () {
    it('should return empty string', function (done) {
      let str = helpers.svgPatternReplacer();
      expect(str).is.empty;
      done();
    });
    it('should return empty color', function (done) {
      let str = helpers.svgPatternReplacer('aaa');
      expect(str).is.equal('class="svg-brandify brandify-icon-aaa" ');
      done();
    });
    it('should return result string with lowercase and without spaces', function (done) {
      let str = helpers.svgPatternReplacer('AAA BBB', '000');
      expect(str).is.equal('class="svg-brandify brandify-icon-aaabbb" fill="#000" ');
      done();
    });
  });
  describe('insertTo(text, position, replacement):', function () {
    it('should return empty string', function (done) {
      let str = helpers.insertTo();
      expect(str).is.empty;
      done();
    });
    it('should return modified string', function (done) {
      let str = helpers.insertTo('some text here', 4, 'body');
      expect(str).is.equal('somebody text here');
      done();
    });
  });
});

describe('brandify', function () {
  it('should return empty string', function (done) {
    let str = brandify();
    expect(str).is.empty;
    done();
  });

  it('should insert before brand names with icons', function (done) {
    let str = brandify('I like github!', 'before');
    expect(str).is.not.equal('I like github!');
    expect(str).is.not.contain('I like github <svg');
    expect(str).is.contain('</svg>&nbsp;GitHub');
    expect(str).is.contain('class="svg-brandify brandify-icon-github"');
    done();
  });
  it('should replace brand names with icons w/o params (by default)', function (done) {
    let str = brandify('I like github!');
    expect(str).is.not.equal('I like github!');
    expect(str).is.not.contain('I like github');
    expect(str).is.contain('class="svg-brandify brandify-icon-github"');
    done();
  });
  it('should replace brand names with icons w/ "replace" param', function (done) {
    let str = brandify('I like github!', 'replace');
    expect(str).is.not.equal('I like github!');
    expect(str).is.not.contain('I like github');
    expect(str).is.contain('class="svg-brandify brandify-icon-github"');
    done();
  });
  it('should insert after brand names with icons', function (done) {
    let str = brandify('I like github!', 'after');
    expect(str).is.not.equal('I like github!');
    expect(str).is.not.contain('I like <svg');
    expect(str).is.contain('I like GitHub&nbsp;<svg');
    expect(str).is.contain('class="svg-brandify brandify-icon-github"');
    done();
  });
});
