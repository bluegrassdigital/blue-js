import removeClass from '../removeClass'
import jsdom from 'mocha-jsdom'
import {assert} from 'chai'

describe('removeClass', function () {
  jsdom()
  it('should remove a class from the current class', function () {
    Object.defineProperty(window.Element.prototype, 'classList', {
      get: function () {
        return null
      }
    })
    var div = document.createElement('div')
    div.className = 'foo bar'
    removeClass(div, 'bar')
    assert.strictEqual(div.className, 'foo')
  })
  it('should remove multiple instances of a class', function () {
    var div = document.createElement('div')
    div.className = 'bar foo foo foo bar foo foo '
    removeClass(div, 'foo')
    assert.strictEqual(div.className, 'bar bar')
  })
  it('should remove any amount of leading and trailing whitespace', function () {
    var div = document.createElement('div')
    div.className = '   foo foo foo bar foo foo  '
    removeClass(div, 'foo')
    assert.strictEqual(div.className, 'bar')
  })
  it('should not remove part of a compound class name', function () {
    var div = document.createElement('div')
    div.className = 'foobar foo'
    removeClass(div, 'foo')
    assert.strictEqual(div.className, 'foobar')
  })
})
