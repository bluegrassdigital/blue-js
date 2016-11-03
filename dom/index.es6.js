import * as lang from '../lang'
import 'classlist-polyfill'

/**
 * A collection of dom utility functions
 *
 * @module dom
 */

/**
 * Remove a class from an element
 *
 * @param {HTMLElement} el The dom node
 * @param {String} cls The class to remove
 * @function
 */
export const removeClass = (el, cls) => {
  el.classList.remove(cls)
}

/**
 * Add a class to an element
 *
 * @param {HTMLElement} el The dom node
 * @param {String} cls The class to add
 * @function
 */
export const addClass = (el, cls) => {
  el.classList.add(cls)
}

/**
 * Toggle a class on an element
 *
 * @param {HTMLElement} el The dom node
 * @param {String} cls The class to toggle
 * @function
 */
export const toggleClass = (el, cls) => {
  el.classList.toggle(cls)
}

/**
 * Check if an element has a class
 *
 * @param {HTMLElement} el The dom node
 * @param {String} cls The classname to check
 * @function
 */
export const hasClass = (el, cls) => {
  return el.classList.contains(cls)
}

/**
 * Wrap an html element with another element or with a wrap function
 *
 * @param {HTMLElement} el The dom node
 * @param {(Function|HTMLElement|string)} argument1 A callback function which is passed `el.outerHTML` as its only function parameter OR a dom node to wrap around the element OO the first of two string arguments to go before and after the element
 * @param {string} [argument2] The string to use for after the dom element (both `argument1` and `argument2` should be strings)
 * @function
 * @example
 * import { dom } from 'blue-js'
 *
 * const foo = document.querySelector('#foo')
 *
 * dom.wrap(foo, html => `<div class="wrapper">${html}</div>`)
 * @example
 * import { dom } from 'blue-js'
 *
 * const foo = document.querySelector('#foo')
 * const wrapper = document.createElement('div')
 *
 * dom.wrap(foo, wrapper)
 * @example
 * import { dom } from 'blue-js'
 *
 * const foo = document.querySelector('#foo')
 *
 * dom.wrap(foo, '<div class="wrapper">', '</div>')
 */
export const wrap = function (el) {
  if (typeof arguments[1] === 'function') el.outerHTML = arguments[1](el.outerHTML)
  if (arguments[1].nodeName) {
    let wrapEl = arguments[1]
    wrapEl.innerHTML = el
    el.outerHTML = wrapEl
  }
  if (typeof arguments[1] === 'string' && typeof arguments[2] === 'string') {
    el.outerHTML = `${arguments[1]}${el.outerHTML}${arguments[2]}`
  }
}

/**
 * Check whether an element is hidden
 *
 * @param {HTMLElement} el The dom node
 * @returns {Boolean} True if `el` is visibly hidden, otherwise false
 * @function
 */
export const isHidden = (el) => {
  return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length)
}

/**
 * Check whether an element is visible
 *
 * @param {HTMLElement} el The dom node
 * @returns {Boolean} True if `el` is visible, otherwise false
 * @function
 */
export const isVisible = (el) => {
  return !isHidden(el)
}

/**
 * Filters a dom NodeList, returning an array of only those elements which match the predicate function
 *
 * @param {NodeList} els The NodeList (created using `getElementsByTagName` or `getElementsByClassName` or `querySelectorAll`) to filter
 * @param {Function} fn The predicate function to test each Element against
 * @returns {Array} A filtered array of dom elements
 * @function
 * @example
 * import { dom } from 'blue-js'
 *
 * const fooLinks = document.querySelectorAll('a.foo')
 *
 * //Filter only foo links with class 'bar'
 * const filteredLinks = dom.filter(fooLinks, el => dom.hasClass(el, 'bar'))
 * //Filter only visible filteredLinks
 * const newFilteredLinks = dom.filter(filteredLinks, dom.isVisible)
 */
export const filter = (els, fn) => {
  if (!fn) return Array.from(els)
  return Array.prototype.filter.call(els, fn)
}

/**
 * Iterate over a dom NodeList
 *
 * @param {NodeList} els The NodeList (created using `getElementsByTagName` or `getElementsByClassName` or `querySelectorAll`) to loop over
 * @param {Function} fn The function to run against each element. Arguments passed are the same as Array.forEach
 * @function
 */
export const each = (els, fn) => {
  lang.apply(els, fn)
}

/**
 * A callback that fires when the document is ready - roughly equaivalent to jQuery document ready
 *
 * @param {Function} fn The callback to fire
 * @function
 */
export const onReady = (fn) => {
  if (
    document.readyState === 'complete' ||
    (document.readyState !== 'loading' && !document.documentElement.doScroll)
  ) {
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

/**
 * Cross browser funtion for getting the dimensions of the window
 * @param {object} [w=window] The window element
 * @param {object} [d=document] The document element
 * @returns {windowDimensions} The window dimensions
 * @function
 */
export const getWindowDimensions = (w = window, d = document) => {
  const e = d.documentElement
  const g = d.getElementsByTagName('body')[0]
  const width = w.innerWidth || e.clientWidth || g.clientWidth
  const height = w.innerHeight || e.clientHeight || g.clientHeight

  return { width, height }
}

/**
 * @typedef {Object} windowDimensions
 * @property {number} width Window width
 * @property {number} height Window height
 */
