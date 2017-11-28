import apply from '../lang/apply'
import { removeMultipleListeners } from './_listeners'

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
export default function removeListeners (els, names) {
  var eventNames = names.split(' ')
  apply(els, function (el) {
    removeMultipleListeners(el, eventNames)
  })
}
