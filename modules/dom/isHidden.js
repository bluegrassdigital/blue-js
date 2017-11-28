import isVisible from './isVisible'

/**
Check whether an element is hidden
@param {HTMLElement} el The dom node
@returns {Boolean} True if `el` is visibly hidden, otherwise false
@memberof module:dom
@alias isHidden
@function
*/
export default function isHidden (el) {
  return !isVisible(el)
}
