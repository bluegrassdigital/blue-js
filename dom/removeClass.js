'use strict';

exports.__esModule = true;
exports.default = removeClass;

var _classlist = require('../utils/classlist');

/**
Remove a class from an element

@param {HTMLElement} el The dom node
@param {String} cls The class to remove
@memberof module:dom
@alias removeClass
@function
*/
function removeClass(el, cls) {
  if (el.classList && typeof el.classList.remove === 'function') return el.classList.remove(cls);
  el.className = (0, _classlist.filterClass)(el.className, cls);
}