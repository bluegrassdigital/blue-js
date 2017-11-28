'use strict';

exports.__esModule = true;
exports.default = listenCollection;

var _listen = require('./listen');

var _listen2 = _interopRequireDefault(_listen);

var _apply = require('../lang/apply');

var _apply2 = _interopRequireDefault(_apply);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Same as events.listen, excpet for NodeList rather than a single Element

@param {NodeList} els The dom collection
@param {String} names The event or events (space-separated) to listen for
@param {Function} fn The callback to fire when the event occurs
@param {Boolean} capture Whether to capture the event or not
@memberof module:events
@alias listenCollection
@function
*/
function listenCollection(els, names, fn, capture) {
  capture = !!capture;
  (0, _apply2.default)(els, function (el) {
    (0, _listen2.default)(el, names, fn, capture);
  });
}