import hasClass from './hasClass'
/**
Add a class to an element

@param {HTMLElement} el The dom node
@param {String} cls The class to add
@memberof module:dom
@alias addClass
@function
*/
export default function addClass (el, cls) {
  if (el.classList && typeof el.classList.add === 'function') return el.classList.add(cls)
  if (!hasClass(el, cls)) {
    var spaceAtEnd = el.className.lastIndexOf(' ') === el.className.length - 1 ? '' : ' '
    el.className += spaceAtEnd + cls
  }
}
