var getWindowDimensions = require('../getWindowDimensions')
var jsdom = require('mocha-jsdom')
var assert = require('chai').assert

describe('getWindowDimensions', function () {
  jsdom()
  it('should return an object containing the `width` and `height` of the window', function () {
    var dimensions = getWindowDimensions()
    assert.equal(typeof dimensions.width, 'number')
    assert.equal(typeof dimensions.height, 'number')
  })
})
