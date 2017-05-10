'use strict';

const brandify = require('./src/index');
const helpers = require('./src/helpers');
const chai = require('chai');

let assert = chai.assert;

let myText = `
This is a text to brand icons replaced for lot of famous brands companies, technologies and tools...
Twitter, Github and more ...
Thanks for cool icons to simple icons!
`;

describe('helpers', function () {
  it('should generate dist/simple-icons.json', function (done) {
    helpers.prepareSimpleIconsJson();
    done();
  });
});

describe('brandify', function () {
  it('should throw the error', function (done) {
    assert.throws(() => brandify(), 'text should be initialized with not empty value');
    done();
  });

  it('should replace brand names with icons', function (done) {
    let newText = brandify(myText);
    // TODO: here should be validation check
    console.log(newText);
    done();
  });
});