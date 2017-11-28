import apply from '../apply'
import {assert} from 'chai'

describe('apply', function () {
  it('should iterate over any iterable', function () {
    var items = [0, 1, 2, 3]
    apply(items, function (item, index) {
      assert.equal(item, index)
    })
    var foo = '0123'
    apply(foo, function (item, index) {
      assert.equal(item, index)
    })
  })
  it('should still run the function against the object if not an iterable', function () {
    var foo = {
      text: '123'
    }
    apply(foo, function (item, index) {
      assert.equal(item.text, '123')
      assert.equal(typeof index, 'undefined')
    })
  })
  it('should not run the function against an iterable of zero length', function (done) {
    var items = []
    apply(items, function (item, index) {
      assert.fail()
    })
    done()
  })
})
