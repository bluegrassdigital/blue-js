var addClass = require('../addClass')
var jsdom = require('mocha-jsdom')
var assert = require('chai').assert

describe('addClass', function () {
  jsdom()
  it('should add a class to the current class', function () {
    this.timeout(5000)
    Object.defineProperty(window.Element.prototype, 'classList', {
      get: function () {
        return null
      }
    })
    var div = document.createElement('div')
    div.className = 'foo bar'
    addClass(div, 'baz')
    assert.equal(div.className, 'foo bar baz')
  })
  it('should not add a class that already exists', function () {
    var div = document.createElement('div')
    div.className = 'foo bar'
    addClass(div, 'bar')
    assert.equal(div.className, 'foo bar')
  })
})
