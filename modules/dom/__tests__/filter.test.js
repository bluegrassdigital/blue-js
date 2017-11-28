import filter from '../filter'
import {assert} from 'chai'

describe('filter', function () {
  var items = [1, 2, 2, 2, 3]
  it('should return an array of elements that pass the test', function () {
    var filtered = filter(items, function (item) {
      return item === 2
    })
    assert.deepEqual(filtered, [2, 2, 2])
  })
  it('should return a new array', function () {
    var filtered = filter(items, function (item) {
      return item !== 2
    })
    assert.notStrictEqual(filtered, items)
  })
})
