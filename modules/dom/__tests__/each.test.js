import each from '../each'
import jsdom from 'mocha-jsdom'
import { assert } from 'chai'

describe('each', function () {
  jsdom({
    html: '<a>0</a><a>1</a><a>2</a>'
  })
  it('should iterate over a NodeList', function () {
    var links = document.querySelectorAll('a')
    each(links, function (link, index) {
      assert.equal(link.innerHTML, index)
    })
  })
  it('should still run the function against the element if not an iterable', function () {
    var links = document.querySelectorAll('a')[1]
    each(links, function (link, index) {
      assert.equal(link.innerHTML, 1)
      assert.equal(typeof index, 'undefined')
    })
  })
})
