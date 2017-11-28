'use strict';

exports.__esModule = true;
exports.default = each;

var _apply = require('../lang/apply');

var _apply2 = _interopRequireDefault(_apply);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Iterate over a dom NodeList

@param {NodeList} els The NodeList (created using `getElementsByTagName` or `getElementsByClassName` or `querySelectorAll`) to loop over
@param {Function} fn The function to run against each element. Arguments passed are the same as Array.forEach
@memberof module:dom
@alias each
@function
*/
function each(els, fn) {
  (0, _apply2.default)(els, fn);
}