'use strict';

exports.__esModule = true;
exports.default = trigger;

var _createCustom = require('./_createCustom');

var _createCustom2 = _interopRequireDefault(_createCustom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Trigger any event on a dom element, optionally pass data
@param {HTMLElement} el The dom node
@param {String} name The event to trigger
@param {Object} [data] The data to pass along with the event
@param {Object} [eventProps] Other event properties to override the defaults, which are `{ bubbles: true, cancelable: true }`
@example
```js
import { events } from 'blue-js'

const fooLink = document.querySelector('a.foo')
events.trigger(fooLink, 'Link:Event', { foo: 'bar' })

// Listen for custom event and use the custom data passed to trigger
events.listen(fooLink, 'Link:Event', event => {
  console.log(event.detail.foo) // -> 'bar'
})
```
@memberof module:events
@alias trigger
@function
*/
function trigger(el, name, data, eventProps) {
  el.dispatchEvent((0, _createCustom2.default)(name, data, eventProps));
}