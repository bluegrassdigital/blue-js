'use strict';

exports.__esModule = true;
exports.default = triggerCustom;

var _trigger = require('./trigger');

var _trigger2 = _interopRequireDefault(_trigger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Trigger any custom event on a dom element
@param {HTMLElement} el The dom node
@param {String} name The event to trigger
@param {Object} [data] The data to pass along with the event
@param {Object} [eventProps] Other event properties to override the defaults, which are `{ bubbles: true, cancelable: true }`
@example
```js
import { events } from 'blue-js'

const fooLink = document.querySelector('a.foo')
events.triggerCustom(fooLink, 'Link:Event', { foo: 'bar' })

// Listen for custom event and use the custom data passed to trigger
events.listen(fooLink, 'Link:Event', event => {
  console.log(event.detail.foo) // -> 'bar'
})
```
@memberof module:events
@alias triggerCustom
@deprecated replaced with a single trigger function
@function
*/
function triggerCustom(el, name, data, eventProps) {
  return (0, _trigger2.default)(el, name, data, eventProps);
}