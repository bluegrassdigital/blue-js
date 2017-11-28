import listen from '../listen'
import trigger from '../trigger'
import jsdom from 'mocha-jsdom'

describe('trigger', function () {
  jsdom()
  it('should trigger a standard event on an element', function (done) {
    var link = document.createElement('a')
    listen(link, 'click', function (event) {
      done()
    })
    trigger(link, 'click')
  })
  it('should trigger a custom event on an element', function (done) {
    var link = document.createElement('a')
    listen(link, 'Foo:Bar', function (event) {
      done()
    })
    trigger(link, 'Foo:Bar')
  })
  it('should pass data on to the event', function (done) {
    var link = document.createElement('a')
    listen(link, 'Foo:Bar', function (event) {
      if (event.detail.foo === 'bar') done()
    })
    trigger(link, 'Foo:Bar', { foo: 'bar' })
  })
})
