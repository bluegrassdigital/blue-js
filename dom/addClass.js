'use strict';

exports.__esModule = true;
exports.default = addClass;

var _hasClass = require('./hasClass');

var _hasClass2 = _interopRequireDefault(_hasClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Add a class to an element

@param {HTMLElement} el The dom node
@param {String} cls The class to add
@memberof module:dom
@alias addClass
@function
*/
function addClass(el, cls) {
  if (el.classList && typeof el.classList.add === 'function') return el.classList.add(cls);
  if (!(0, _hasClass2.default)(el, cls)) {
    var spaceAtEnd = el.className.lastIndexOf(' ') === el.className.length - 1 ? '' : ' ';
    el.className += spaceAtEnd + cls;
  }
}