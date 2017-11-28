'use strict';

exports.__esModule = true;
exports.default = removeListeners;

var _apply = require('../lang/apply');

var _apply2 = _interopRequireDefault(_apply);

var _listeners = require('./_listeners');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Remove one or more events from one or more targets
@param {HTMLElement} els The dom element or any iterable containing dom elements (eg. NodeList)
@param {String} names The event or events (space separated) to remove the listeners for
@memberof module:events
@alias removeListeners
@function
@example
```js
import { events } from 'blue-js'

const fooLinks = document.querySelectorAll('a.foo')
events.removeListeners(fooLinks, 'click mouseenter')
```
*/
function removeListeners(els, names) {
  var eventNames = names.split(' ');
  (0, _apply2.default)(els, function (el) {
    (0, _listeners.removeMultipleListeners)(el, eventNames);
  });
}