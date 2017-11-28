import removeListeners from '../removeListeners'
import listenCollection from '../listenCollection'
import jsdom from 'mocha-jsdom'

describe('removeListeners', function () {
  jsdom()
  it('should remove a listener from a single element', function (done) {
    var count = 0
    var link = document.createElement('a')
    listenCollection(link, 'click', function (event) {
      count++
    })
    var clickEvt = new window.Event('click')
    link.dispatchEvent(clickEvt)
    removeListeners(link, 'click')
    link.dispatchEvent(clickEvt)
    setTimeout(function () {
      if (count === 1) done()
    }, 50)
  })
  it('should not remove a listener with a different name', function (done) {
    var count = 0
    var link = document.createElement('a')
    listenCollection(link, 'click', function (event) {
      count++
    })
    var clickEvt = new window.Event('click')
    link.dispatchEvent(clickEvt)
    removeListeners(link, 'mouseenter')
    link.dispatchEvent(clickEvt)
    setTimeout(function () {
      if (count === 2) done()
    }, 50)
  })
  it('should only remove listeners with the same name', function (done) {
    var count = 0
    var link = document.createElement('a')
    listenCollection(link, 'click mouseenter', function (event) {
      count++
    })
    var clickEvt = new window.Event('click')
    var mouseEvt = new window.Event('mouseenter')
    link.dispatchEvent(clickEvt)
    link.dispatchEvent(mouseEvt)
    removeListeners(link, 'click')
    link.dispatchEvent(clickEvt)
    link.dispatchEvent(mouseEvt)
    setTimeout(function () {
      if (count === 3) done()
    }, 50)
  })
  it('should remove multiple listeners for the same event', function (done) {
    var count = 0
    var link = document.createElement('a')
    listenCollection(link, 'click', function (event) {
      count++
    })
    listenCollection(link, 'click', function (event) {
      count++
    })
    var clickEvt = new window.Event('click')
    link.dispatchEvent(clickEvt)
    removeListeners(link, 'click')
    link.dispatchEvent(clickEvt)
    setTimeout(function () {
      if (count === 2) done()
    }, 50)
  })
  it('should remove multiple listeners from multiple elements', function (done) {
    var count = 0
    var link1 = document.createElement('a')
    var link2 = document.createElement('a')
    document.body.appendChild(link1)
    document.body.appendChild(link2)
    var links = document.querySelectorAll('a')
    listenCollection(links, 'click mouseenter', function (event) {
      if (event.target === link1 || event.target === link2) count++
    })
    var clickEvt = new window.Event('click')
    var mouseEvt = new window.Event('mouseenter')
    link1.dispatchEvent(clickEvt)
    link2.dispatchEvent(mouseEvt)
    removeListeners(links, 'click mouseenter')
    link2.dispatchEvent(clickEvt)
    link1.dispatchEvent(mouseEvt)
    link1.dispatchEvent(clickEvt)
    link2.dispatchEvent(mouseEvt)
    setTimeout(function () {
      if (count === 2) done()
    }, 50)
  })
})
