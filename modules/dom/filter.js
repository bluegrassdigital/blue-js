/**
Filters a dom NodeList, returning an array of only those elements which match the predicate function

@param {NodeList} els The NodeList (created using `getElementsByTagName` or `getElementsByClassName` or `querySelectorAll`) to filter
@param {Function} fn The predicate function to test each Element against
@returns {Array} A filtered array of dom elements
@function
@memberof module:blue
@alias .filter
@example
Filter only foo links with class 'bar':
```js
import { filter } from 'blue-js'

const fooLinks = document.querySelectorAll('a.foo')
const filteredLinks = filter(fooLinks, el => dom.hasClass(el, 'bar'))
```

Filter only visible filteredLinks:
```js
import { filter } from 'blue-js'

const fooLinks = document.querySelectorAll('a.foo')
const newFilteredLinks = filter(filteredLinks, dom.isVisible)
```
*/
export default function filter (els, fn) {
  if (!fn) return els
  return Array.prototype.filter.call(els, fn)
}
