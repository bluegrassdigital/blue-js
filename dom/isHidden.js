/**
Check whether an element is hidden
@param {HTMLElement} el The dom node
@returns {Boolean} True if `el` is visibly hidden, otherwise false
@memberof module:dom
@alias isHidden
@function
*/
module.exports = function isHidden (el) {
  return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length)
}
