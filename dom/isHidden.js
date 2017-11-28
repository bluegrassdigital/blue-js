'use strict';

exports.__esModule = true;
exports.default = isHidden;

var _isVisible = require('./isVisible');

var _isVisible2 = _interopRequireDefault(_isVisible);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Check whether an element is hidden
@param {HTMLElement} el The dom node
@returns {Boolean} True if `el` is visibly hidden, otherwise false
@memberof module:dom
@alias isHidden
@function
*/
function isHidden(el) {
  return !(0, _isVisible2.default)(el);
}