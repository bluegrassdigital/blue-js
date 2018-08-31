import wrap from '../wrap'
import jsdom from 'mocha-jsdom'
import {assert} from 'chai'

describe('wrap', function () {
  jsdom({
    url: 'http://localhost/',
    html: '<div class="foo"></div>'
  })
  it('should not remove the reference to the existing node', function () {
    var div = document.createElement('div')
    var foo = document.querySelector('.foo')
    wrap(foo, div)
    var foo2 = document.querySelector('.foo')
    assert.strictEqual(foo, foo2)
  })
  it('should replace an existing elements outerHTML with the return from the wrapping function', function () {
    var div = document.createElement('div')
    document.body.appendChild(div)
    div.className = 'foo'
    wrap(div, function (html) {
      return '<div class="test">' + html + '</div>'
    })
    assert.strictEqual(div.parentNode.outerHTML, '<div class="test"><div class="foo"></div></div>')
  })
  it('should wrap an existing node with a new node', function () {
    var div = document.createElement('div')
    var div2 = document.createElement('div')
    document.body.appendChild(div)
    div.className = 'foo'
    div2.className = 'test'
    wrap(div, div2)
    assert.strictEqual(div.parentNode.outerHTML, '<div class="test"><div class="foo"></div></div>')
  })
  it('should wrap an existing node with two strings before and after', function () {
    var div = document.createElement('div')
    document.body.appendChild(div)
    div.className = 'foo'
    wrap(div, '<div class="test">', '</div>')
    assert.strictEqual(div.parentNode.outerHTML, '<div class="test"><div class="foo"></div></div>')
  })
})
