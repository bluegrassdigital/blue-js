# blue-js

[![Build Status](https://travis-ci.org/bluegrassdigital/blue-js.svg?branch=master)](https://travis-ci.org/bluegrassdigital/blue-js) [![npm version](https://badge.fury.io/js/blue-js.svg)](https://badge.fury.io/js/blue-js) [![Greenkeeper badge](https://badges.greenkeeper.io/bluegrassdigital/blue-js.svg)](https://greenkeeper.io/) [![codecov](https://codecov.io/gh/bluegrassdigital/blue-js/branch/master/graph/badge.svg)](https://codecov.io/gh/bluegrassdigital/blue-js) [![gzip size](https://img.badgesize.io/https://unpkg.com/blue-js/dist/blue.umd.js?compression=gzip)](https://unpkg.com/blue-js/dist/blue.umd.js)

**blue-js** is a super lightweight commonjs javascript dom & events library

This library is developed and maintained internally at [bluegrassdigital](http://www.bluegrassdigital.com)

## Installation

`npm install blue-js`

### Upgrading from V2

The top level module exports dom , events and ps are gone, all methods are exported directly from the root module, muvh like lodash.

The pubsub implementation ps has been removed as it was somewhat outside the scope of this library - please use something like https://github.com/developit/mitt instead.

## API

<a name="module_blue"></a>

## blue
A collection of dom utility functions


* [blue](#module_blue)
    * [.addClass(el, cls)](#.addClass)
    * [.each(els, fn)](#.each)
    * [.filter(els, fn)](#.filter) ⇒ <code>Array</code>
    * [.getWindowDimensions([w], [d])](#.getWindowDimensions) ⇒ <code>windowDimensions</code>
    * [.hasClass(el, cls)](#.hasClass)
    * [.isHidden(el)](#.isHidden) ⇒ <code>Boolean</code>
    * [.isVisible(el)](#.isVisible) ⇒ <code>Boolean</code>
    * [.onReady(fn)](#.onReady)
    * [.removeClass(el, cls)](#.removeClass)
    * [.toggleClass(el, cls)](#.toggleClass)
    * [.wrap(el, argument1, [argument2])](#.wrap)
    * [.listen(el, names, fn, capture)](#.listen) ⇒ <code>Object</code>
    * [.listenCollection(els, names, fn, capture)](#.listenCollection)
    * [.removeListeners(els, names)](#.removeListeners)
    * [.trigger(el, name, [data], [eventProps])](#.trigger)
    * _static_
        * [.windowDimensions](#module_blue.windowDimensions) : <code>Object</code>

<a name=".addClass"></a>

### blue.addClass(el, cls)
Add a class to an element


| Param | Type | Description |
| --- | --- | --- |
| el | <code>HTMLElement</code> | The dom node |
| cls | <code>String</code> | The class to add |

<a name=".each"></a>

### blue.each(els, fn)
Iterate over a dom NodeList


| Param | Type | Description |
| --- | --- | --- |
| els | <code>NodeList</code> | The NodeList (created using `getElementsByTagName` or `getElementsByClassName` or `querySelectorAll`) to loop over |
| fn | <code>function</code> | The function to run against each element. Arguments passed are the same as Array.forEach |

<a name=".filter"></a>

### blue.filter(els, fn) ⇒ <code>Array</code>
Filters a dom NodeList, returning an array of only those elements which match the predicate function

**Returns**: <code>Array</code> - A filtered array of dom elements  

| Param | Type | Description |
| --- | --- | --- |
| els | <code>NodeList</code> | The NodeList (created using `getElementsByTagName` or `getElementsByClassName` or `querySelectorAll`) to filter |
| fn | <code>function</code> | The predicate function to test each Element against |

**Example**  
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
<a name=".getWindowDimensions"></a>

### blue.getWindowDimensions([w], [d]) ⇒ <code>windowDimensions</code>
Cross browser funtion for getting the dimensions of the window

**Returns**: <code>windowDimensions</code> - The window dimensions  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [w] | <code>object</code> | <code>window</code> | The window element |
| [d] | <code>object</code> | <code>document</code> | The document element |

<a name=".hasClass"></a>

### blue.hasClass(el, cls)
Check if an element has a class


| Param | Type | Description |
| --- | --- | --- |
| el | <code>HTMLElement</code> | The dom node |
| cls | <code>String</code> | The classname to check |

<a name=".isHidden"></a>

### blue.isHidden(el) ⇒ <code>Boolean</code>
Check whether an element is hidden

**Returns**: <code>Boolean</code> - True if `el` is visibly hidden, otherwise false  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>HTMLElement</code> | The dom node |

<a name=".isVisible"></a>

### blue.isVisible(el) ⇒ <code>Boolean</code>
Check whether an element is visible

**Returns**: <code>Boolean</code> - True if `el` is visible, otherwise false  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>HTMLElement</code> | The dom node |

<a name=".onReady"></a>

### blue.onReady(fn)
A callback that fires when the document is ready - roughly equaivalent to jQuery document ready


| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The callback to fire |

<a name=".removeClass"></a>

### blue.removeClass(el, cls)
Remove a class from an element


| Param | Type | Description |
| --- | --- | --- |
| el | <code>HTMLElement</code> | The dom node |
| cls | <code>String</code> | The class to remove |

<a name=".toggleClass"></a>

### blue.toggleClass(el, cls)
Toggle a class on an element


| Param | Type | Description |
| --- | --- | --- |
| el | <code>HTMLElement</code> | The dom node |
| cls | <code>String</code> | The class to toggle |

<a name=".wrap"></a>

### blue.wrap(el, argument1, [argument2])
Wrap an html element with another element or with a wrap function


| Param | Type | Description |
| --- | --- | --- |
| el | <code>HTMLElement</code> | The dom node |
| argument1 | <code>function</code> \| <code>HTMLElement</code> \| <code>string</code> | A callback function which is passed `el.outerHTML` as its only function parameter OR a dom node to wrap around the element OO the first of two string arguments to go before and after the element |
| [argument2] | <code>string</code> | The string to use for after the dom element (both `argument1` and `argument2` should be strings) |

**Example**  
Using a wrapper function:
```js
import { wrap } from 'blue-js'

const foo = document.querySelector('#foo')
wrap(foo, html => `<div class="wrapper">${html}</div>`)
```
**Example**  
Using an html element:
```js
import { wrap } from 'blue-js'

const foo = document.querySelector('#foo')
const wrapper = document.createElement('div')
wrap(foo, wrapper)
```
**Example**  
Using two strings:
```js
import { wrap } from 'blue-js'

const foo = document.querySelector('#foo')
wrap(foo, '<div class="wrapper">', '</div>')
```
<a name=".listen"></a>

### blue.listen(el, names, fn, capture) ⇒ <code>Object</code>
Listen for one or more events (custom or standard)

**Returns**: <code>Object</code> - An object with a `remove` method to remove the listener later  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>HTMLElement</code> | The dom element |
| names | <code>String</code> | The event or events (space-separated) to listen for |
| fn | <code>function</code> | The callback to fire when the event occurs |
| capture | <code>Boolean</code> | Whether to capture the event or not |

**Example**  
Add a listener:
```js
import { listen } from 'blue-js'

const fooLink = document.querySelector('a.foo')

listen(fooLink, 'click', (event) => {
  event.preventDefault()
  const { target } = event
  target.classlist.add('.is-clicked')
})
```
**Example**  
Remove listener later:
```js
import { listen } from 'blue-js'

const fooLink = document.querySelector('a.foo')

const listener = listen(fooLink, 'click', (event) => {
  event.preventDefault()
  const { target } = event
  target.classlist.add('.is-clicked')
})
//Some time later
listener.remove()
```
**Example**  
Remove listener immediately:
```js
import { listen } from 'blue-js'

const fooLink = document.querySelector('a.foo')

const listener = listen(fooLink, 'click', (event) => {
  event.preventDefault()
  const { target } = event
  target.classlist.add('.is-clicked')
  listener.remove()
})
```
<a name=".listenCollection"></a>

### blue.listenCollection(els, names, fn, capture)
Same as events.listen, excpet for NodeList rather than a single Element


| Param | Type | Description |
| --- | --- | --- |
| els | <code>NodeList</code> | The dom collection |
| names | <code>String</code> | The event or events (space-separated) to listen for |
| fn | <code>function</code> | The callback to fire when the event occurs |
| capture | <code>Boolean</code> | Whether to capture the event or not |

<a name=".removeListeners"></a>

### blue.removeListeners(els, names)
Remove one or more events from one or more targets


| Param | Type | Description |
| --- | --- | --- |
| els | <code>HTMLElement</code> | The dom element or any iterable containing dom elements (eg. NodeList) |
| names | <code>String</code> | The event or events (space separated) to remove the listeners for |

**Example**  
```js
import { removeListeners } from 'blue-js'

const fooLinks = document.querySelectorAll('a.foo')
removeListeners(fooLinks, 'click mouseenter')
```
<a name=".trigger"></a>

### blue.trigger(el, name, [data], [eventProps])
Trigger any event on a dom element, optionally pass data


| Param | Type | Description |
| --- | --- | --- |
| el | <code>HTMLElement</code> | The dom node |
| name | <code>String</code> | The event to trigger |
| [data] | <code>Object</code> | The data to pass along with the event |
| [eventProps] | <code>Object</code> | Other event properties to override the defaults, which are `{ bubbles: true, cancelable: true }` |

**Example**  
```js
import { listen, trigger } from 'blue-js'

const fooLink = document.querySelector('a.foo')
trigger(fooLink, 'Link:Event', { foo: 'bar' })

// Listen for custom event and use the custom data passed to trigger
listen(fooLink, 'Link:Event', event => {
  console.log(event.detail.foo) // -> 'bar'
})
```
<a name="module_blue.windowDimensions"></a>

### blue.windowDimensions : <code>Object</code>
**Kind**: static typedef of [<code>blue</code>](#module_blue)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | Window width |
| height | <code>number</code> | Window height |


## Contributing to blue-js

[Standard JS](http://standardjs.com/) applies

camelCase for function and variable names

[Github Flow](https://guides.github.com/introduction/flow/) - branch, submit pull requests

### Getting set up

- Pull the repo
- run `npm install`
- run `npm start` to run all unit tests, lint the codebase, and build the API docs

* * *

## Contribute

First off, thanks for taking the time to contribute!
Now, take a moment to be sure your contributions make sense to everyone else.

### Reporting Issues

Found a problem? Want a new feature? First of all see if your issue or idea has [already been reported](../../issues).
If it hasn't, just open a [new clear and descriptive issue](../../issues/new).

### Submitting pull requests

Pull requests are the greatest contributions, so be sure they are focused in scope, and do avoid unrelated commits.

-   Fork it!
-   Clone your fork: `git clone https://github.com/<your-username>/blue-js`
-   Navigate to the newly cloned directory: `cd blue-js`
-   Create a new branch for the new feature: `git checkout -b my-new-feature`
-   Install the tools necessary for development: `npm install`
-   Make your changes.
-   `npm test` to make sure your change doesn't break anything.
-   Commit your changes: `git commit -am 'Add some feature'`
-   Push to the branch: `git push origin my-new-feature`
-   Submit a pull request with full remarks documenting your changes.
