'use strict';

const brandify = require('./index');
const chai = require('chai');

let assert = chai.assert;

let myText = `
  I like to use twitter and git every day. You can check my linkedin profile if you want.
`;

let newText = brandify(myText);

describe('brandify', function () {
  it('should throw the error', function (done) {
    assert.throws(() => brandify().exec(), 'text should be initialized with not empty value');
    done();
  });

  it('should replace brand names with icons', function (done) {
    let newText = brandify().exec(myText);
    // TODO: here should be validation check
    console.log(newText);
    done();
  });
});