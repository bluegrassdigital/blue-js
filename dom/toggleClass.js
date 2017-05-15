var hasClass = require('./hasClass')
var addClass = require('./addClass')
var removeClass = require('./removeClass')
/**
Toggle a class on an element
@param {HTMLElement} el The dom node
@param {String} cls The class to toggle
@memberof module:dom
@alias toggleClass
@function
*/
module.exports = function toggleClass (el, cls) {
  if (window.Element.prototype.classList) return el.classList.toggle(cls)
  if (hasClass(el, cls)) {
    removeClass(el, cls)
  } else {
    addClass(el, cls)
  }
}
