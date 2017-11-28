import { splitClass } from '../utils/classlist'
/**
Check if an element has a class
@param {HTMLElement} el The dom node
@param {String} cls The classname to check
@memberof module:dom
@alias hasClass
@function
*/
export default function hasClass (el, cls) {
  return (el.classList && typeof el.classList.contains === 'function' && el.classList.contains(cls)) || splitClass(el.className).indexOf(cls) > -1
}
