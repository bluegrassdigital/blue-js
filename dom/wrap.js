'use strict';

exports.__esModule = true;
exports.default = wrap;
/**
Wrap an html element with another element or with a wrap function

@param {HTMLElement} el The dom node
@param {(Function|HTMLElement|string)} argument1 A callback function which is passed `el.outerHTML` as its only function parameter OR a dom node to wrap around the element OO the first of two string arguments to go before and after the element
@param {string} [argument2] The string to use for after the dom element (both `argument1` and `argument2` should be strings)
@memberof module:dom
@alias wrap
@function
@example
Using a wrapper function:
```js
import { dom } from 'blue-js'

const foo = document.querySelector('#foo')
dom.wrap(foo, html => `<div class="wrapper">${html}</div>`)
```
@example
Using an html element:
```js
import { dom } from 'blue-js'

const foo = document.querySelector('#foo')
const wrapper = document.createElement('div')
dom.wrap(foo, wrapper)
```
@example
Using two strings:
```js
import { dom } from 'blue-js'

const foo = document.querySelector('#foo')
dom.wrap(foo, '<div class="wrapper">', '</div>')
```
*/
function wrap(el) {
  var newDiv = arguments[1].nodeName ? arguments[1] : document.createElement('div');
  var parent = el.parentNode;
  parent.insertBefore(newDiv, el);
  if (typeof arguments[1] === 'function') {
    newDiv.outerHTML = arguments[1]('');
  }
  if (typeof arguments[1] === 'string' && typeof arguments[2] === 'string') {
    newDiv.outerHTML = arguments[1] + arguments[2];
  }
  if (typeof arguments[1] === 'string' && typeof arguments[2] === 'undefined') {
    newDiv.outerHTML = arguments[1];
  }
  var wrapper = el.previousSibling;
  wrapper.appendChild(el);
}