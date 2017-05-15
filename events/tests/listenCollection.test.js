var listenCollection = require('../listenCollection')
var jsdom = require('mocha-jsdom')

describe('listenCollection', function () {
  jsdom()
  it('should listen for an event across multiple elements', function (done) {
    var count = 0
    var link1 = document.createElement('a')
    var link2 = document.createElement('a')
    document.body.appendChild(link1)
    document.body.appendChild(link2)
    var links = document.querySelectorAll('a')
    listenCollection(links, 'click', function (event) {
      if (event.target === link1 || event.target === link2) count++
      if (count === 2) done()
    })
    var clickEvt = new window.Event('click')
    link1.dispatchEvent(clickEvt)
    link2.dispatchEvent(clickEvt)
  })
})
