'use strict';

exports.__esModule = true;
exports.default = listen;

var _listeners = require('./_listeners');

/**
Listen for one or more events (custom or standard)

@param {HTMLElement} el The dom element
@param {String} names The event or events (space-separated) to listen for
@param {Function} fn The callback to fire when the event occurs
@param {Boolean} capture Whether to capture the event or not
@returns {{remove: function}} An object with a `remove` method to remove the listener later
@example
Add a listener:
```js
import { events } from 'blue-js'

const fooLink = document.querySelector('a.foo')

events.listen(fooLink, 'click', (event) => {
  event.preventDefault()
  const { target } = event
  target.classlist.add('.is-clicked')
})
```
@example
Remove listener later:
```js
import { events } from 'blue-js'

const fooLink = document.querySelector('a.foo')

const listener = events.listen(fooLink, 'click', (event) => {
  event.preventDefault()
  const { target } = event
  target.classlist.add('.is-clicked')
})
//Some time later
listener.remove()
```
@example
Remove listener immediately:
```js
import { events } from 'blue-js'

const fooLink = document.querySelector('a.foo')

const listener = events.listen(fooLink, 'click', (event) => {
  event.preventDefault()
  const { target } = event
  target.classlist.add('.is-clicked')
  listener.remove()
})
```
@memberof module:events
@alias listen
@function
*/
function listen(el, names, fn, capture) {
  capture = !!capture;
  names = names.split(' ');
  (0, _listeners.listenMultipleEvents)(el, names, fn, capture);
  return {
    remove: _listeners.removeSpecificListeners.bind(this, el, names, fn, capture)
  };
}