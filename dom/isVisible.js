var isHidden = require('./isHidden')

/**
Check whether an element is visible

@param {HTMLElement} el The dom node
@returns {Boolean} True if `el` is visible, otherwise false
@memberof module:dom
@alias isVisible
*/
module.exports = function isVisible (el) {
  return !isHidden(el)
}
