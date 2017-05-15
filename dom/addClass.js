var hasClass = require('./hasClass')
/**
Add a class to an element

@param {HTMLElement} el The dom node
@param {String} cls The class to add
@memberof module:dom
@alias addClass
@function
*/
module.exports = function addClass (el, cls) {
  if (el.classList && typeof el.classList.add === 'function') return el.classList.add(cls)
  if (!hasClass(el, cls)) {
    el.className += ' ' + cls
  }
}
