/**
Filters a dom NodeList, returning an array of only those elements which match the predicate function

@param {NodeList} els The NodeList (created using `getElementsByTagName` or `getElementsByClassName` or `querySelectorAll`) to filter
@param {Function} fn The predicate function to test each Element against
@returns {Array} A filtered array of dom elements
@function
@memberof module:dom
@alias filter
@example
Filter only foo links with class 'bar':
```js
import { dom } from 'blue-js'

const fooLinks = document.querySelectorAll('a.foo')
const filteredLinks = dom.filter(fooLinks, el => dom.hasClass(el, 'bar'))
```

Filter only visible filteredLinks:
```js
import { dom } from 'blue-js'

const fooLinks = document.querySelectorAll('a.foo')
const newFilteredLinks = dom.filter(filteredLinks, dom.isVisible)
```
*/
module.exports = function filter (els, fn) {
  if (!fn) return els
  return Array.prototype.filter.call(els, fn)
}
