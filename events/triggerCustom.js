var trigger = require('./trigger')
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
module.exports = function triggerCustom (el, name, data, eventProps) {
  return trigger(el, name, data, eventProps)
}
