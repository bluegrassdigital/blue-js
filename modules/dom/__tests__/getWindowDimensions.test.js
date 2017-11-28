import getWindowDimensions from '../getWindowDimensions'
import jsdom from 'mocha-jsdom'
import {assert} from 'chai'

describe('getWindowDimensions', function () {
  jsdom()
  it('should return an object containing the `width` and `height` of the window', function () {
    var dimensions = getWindowDimensions()
    assert.equal(typeof dimensions.width, 'number')
    assert.equal(typeof dimensions.height, 'number')
  })
})
