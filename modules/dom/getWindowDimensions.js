/**
Cross browser funtion for getting the dimensions of the window
@param {object} [w=window] The window element
@param {object} [d=document] The document element
@returns {windowDimensions} The window dimensions
@function
@memberof module:dom
@alias getWindowDimensions
*/
export default function getWindowDimensions (w, d) {
  w = w || window
  d = d || document
  var e = d.documentElement
  var g = d.getElementsByTagName('body')[0]
  var width = w.innerWidth || e.clientWidth || g.clientWidth
  var height = w.innerHeight || e.clientHeight || g.clientHeight

  return {
    width: width,
    height: height
  }
}

/**
@typedef {Object} windowDimensions
@property {number} width Window width
@property {number} height Window height
@memberof module:dom
 */
