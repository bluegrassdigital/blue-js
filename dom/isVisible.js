"use strict";

exports.__esModule = true;
exports.default = isVisible;
/**
Check whether an element is visible

@param {HTMLElement} el The dom node
@returns {Boolean} True if `el` is visible, otherwise false
@memberof module:dom
@alias isVisible
*/
function isVisible(el) {
  return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
}