var filterClass = require('../utils/classlist').filterClass
/**
Remove a class from an element

@param {HTMLElement} el The dom node
@param {String} cls The class to remove
@memberof module:dom
@alias removeClass
@function
*/
module.exports = function removeClass (el, cls) {
  if (window.Element.prototype.classList) return el.classList.remove(cls)
  el.className = filterClass(el.className, cls)
}
