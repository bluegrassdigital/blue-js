/**
Check whether an element is visible

@param {HTMLElement} el The dom node
@returns {Boolean} True if `el` is visible, otherwise false
@memberof module:dom
@alias isVisible
*/
export default function isVisible (el) {
  return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length)
}
