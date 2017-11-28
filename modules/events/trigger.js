import createCustom from './_createCustom'
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
export default function trigger (el, name, data, eventProps) {
  el.dispatchEvent(createCustom(name, data, eventProps))
}
