'use strict';

exports.__esModule = true;
exports.default = hasClass;

var _classlist = require('../utils/classlist');

/**
Check if an element has a class
@param {HTMLElement} el The dom node
@param {String} cls The classname to check
@memberof module:dom
@alias hasClass
@function
*/
function hasClass(el, cls) {
  return el.classList && typeof el.classList.contains === 'function' && el.classList.contains(cls) || (0, _classlist.splitClass)(el.className).indexOf(cls) > -1;
}