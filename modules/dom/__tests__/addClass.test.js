import addClass from '../addClass'
import jsdom from 'mocha-jsdom'
import { assert } from 'chai'

describe('addClass', function () {
  jsdom({
    url: 'http://localhost/'
  })
  it('should add a class to the current class', function () {
    this.timeout(5000)
    Object.defineProperty(window.Element.prototype, 'classList', {
      get: function () {
        return null
      }
    })
    var div = document.createElement('div')
    div.className = 'foo bar '
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
