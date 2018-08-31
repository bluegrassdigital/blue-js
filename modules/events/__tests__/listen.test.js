import listen from '../listen'
import jsdom from 'mocha-jsdom'

describe('listen', function () {
  jsdom({ url: 'http://localhost/' })
  it('should listen for an event', function (done) {
    var link = document.createElement('a')
    listen(link, 'click', function (event) {
      done()
    })
    var clickEvt = new window.Event('click')
    link.dispatchEvent(clickEvt)
  })
  it('should remove a listener when the returned remove function is called', function (done) {
    var link = document.createElement('a')
    var count = 0
    var listener = listen(link, 'click', function (event) {
      count++
    })
    var clickEvt = new window.Event('click')
    link.dispatchEvent(clickEvt)
    listener.remove()
    link.dispatchEvent(clickEvt)
    setTimeout(function () {
      if (count === 1) done()
    }, 50)
  })
  it('should listen for multiple events', function (done) {
    var link = document.createElement('a')
    var count = 0
    listen(link, 'click mouseenter', function (event) {
      count++
      if (count === 2) done()
    })
    var clickEvt = new window.Event('click')
    var mouseenterEvt = new window.Event('mouseenter')
    link.dispatchEvent(clickEvt)
    link.dispatchEvent(mouseenterEvt)
  })
})
