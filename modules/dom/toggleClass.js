import hasClass from './hasClass'
import addClass from './addClass'
import removeClass from './removeClass'
/**
Toggle a class on an element
@param {HTMLElement} el The dom node
@param {String} cls The class to toggle
@memberof module:blue
@alias .toggleClass
@function
*/
export default function toggleClass (el, cls) {
  if (el.classList && typeof el.classList.toggle === 'function') return el.classList.toggle(cls)
  if (hasClass(el, cls)) {
    removeClass(el, cls)
  } else {
    addClass(el, cls)
  }
}
