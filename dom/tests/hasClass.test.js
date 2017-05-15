var hasClass = require('../hasClass')
var jsdom = require('mocha-jsdom')
var assert = require('chai').assert

describe('hasClass', function () {
  jsdom()
  it('should match a single class', function () {
    Object.defineProperty(window.Element.prototype, 'classList', {
      get: function () {
        return null
      }
    })
    var div = document.createElement('div')
    div.className = 'bar'
    var match = hasClass(div, 'bar')
    assert.strictEqual(match, true)
  })
  it('should match multiple instances of a class', function () {
    var div = document.createElement('div')
    div.className = 'bar bar'
    var match = hasClass(div, 'bar')
    assert.strictEqual(match, true)
  })
  it('should not match if part of a compound class name', function () {
    var div = document.createElement('div')
    div.className = 'barbar'
    var match = hasClass(div, 'bar')
    assert.strictEqual(match, false)
  })
})
