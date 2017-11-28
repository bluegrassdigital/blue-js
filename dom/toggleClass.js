'use strict';

exports.__esModule = true;
exports.default = toggleClass;

var _hasClass = require('./hasClass');

var _hasClass2 = _interopRequireDefault(_hasClass);

var _addClass = require('./addClass');

var _addClass2 = _interopRequireDefault(_addClass);

var _removeClass = require('./removeClass');

var _removeClass2 = _interopRequireDefault(_removeClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Toggle a class on an element
@param {HTMLElement} el The dom node
@param {String} cls The class to toggle
@memberof module:dom
@alias toggleClass
@function
*/
function toggleClass(el, cls) {
  if (el.classList && typeof el.classList.toggle === 'function') return el.classList.toggle(cls);
  if ((0, _hasClass2.default)(el, cls)) {
    (0, _removeClass2.default)(el, cls);
  } else {
    (0, _addClass2.default)(el, cls);
  }
}