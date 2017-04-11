var toggleClass = require('../toggleClass')
var jsdom = require('mocha-jsdom')
var assert = require('chai').assert

describe('toggleClass', function () {
  jsdom()
  it('should toggle a class off if it is present', function () {
    Object.defineProperty(window.Element.prototype, 'classList', {
      get: function () {
        return null
      }
    })
    var div = document.createElement('div')
    div.className = 'bar'
    toggleClass(div, 'bar')
    assert.strictEqual(div.className, '')
  })
  it('should toggle a class on if it is not present', function () {
    var div = document.createElement('div')
    div.className = 'foo'
    toggleClass(div, 'bar')
    assert.strictEqual(div.className, 'foo bar')
  })
})
