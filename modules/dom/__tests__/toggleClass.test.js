import toggleClass from '../toggleClass'
import jsdom from 'mocha-jsdom'
import {assert} from 'chai'

describe('toggleClass', function () {
  jsdom({ url: 'http://localhost/' })
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
