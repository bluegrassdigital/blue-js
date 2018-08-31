# blue-js

[![Build Status](https://travis-ci.org/bluegrassdigital/blue-js.svg?branch=master)](https://travis-ci.org/bluegrassdigital/blue-js) [![npm version](https://badge.fury.io/js/blue-js.svg)](https://badge.fury.io/js/blue-js) [![Greenkeeper badge](https://badges.greenkeeper.io/bluegrassdigital/blue-js.svg)](https://greenkeeper.io/) [![codecov](https://codecov.io/gh/bluegrassdigital/blue-js/branch/master/graph/badge.svg)](https://codecov.io/gh/bluegrassdigital/blue-js)

**blue-js** is a super lightweight commonjs javascript dom & events library

This library is developed and maintained internally at [bluegrassdigital](http://www.bluegrassdigital.com)

There are 3 main modules: `events` `dom` and `ps` (pubsub)

## Installation

`npm install blue-js`

## Usage

```js
// ES6 imports
import { dom, events, ps } from 'blue-js'

// Using require()
var dom = require('blue-js').dom
var events = require('blue-js').events
var ps = require('blue-js').ps

// Use dom.each(), events.trigger() etc.
```
## API

## Modules

<dl>
<dt><a href="#module_dom">dom</a></dt>
<dd><p>A collection of dom utility functions</p>
</dd>
<dt><a href="#module_events">events</a></dt>
<dd><p>A collection of event utility functions</p>
</dd>
<dt><a href="#module_ps">ps</a></dt>
<dd><p>This is a basic PubSub (Publish and Subscribe) implementation.</p>
</dd>
</dl>

<a name="module_dom"></a>

## dom
A collection of dom utility functions


* [dom](#module_dom)
    * [.addClass(el, cls)](#module_dom.addClass)
    * [.each(els, fn)](#module_dom.each)
    * [.filter(els, fn)](#module_dom.filter) ⇒ <code>Array</code>
    * [.getWindowDimensions([w], [d])](#module_dom.getWindowDimensions) ⇒ <code>windowDimensions</code>
    * [.hasClass(el, cls)](#module_dom.hasClass)
    * [.isHidden(el)](#module_dom.isHidden) ⇒ <code>Boolean</code>
    * [.isVisible(el)](#module_dom.isVisible) ⇒ <code>Boolean</code>
    * [.onReady(fn)](#module_dom.onReady)
    * [.removeClass(el, cls)](#module_dom.removeClass)
    * [.toggleClass(el, cls)](#module_dom.toggleClass)
    * [.wrap(el, argument1, [argument2])](#module_dom.wrap)
    * [.windowDimensions](#module_dom.windowDimensions) : <code>Object</code>

<a name="module_dom.addClass"></a>

### dom.addClass(el, cls)
Add a class to an element

**Kind**: static method of <code>[dom](#module_dom)</code>  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>HTMLElement</code> | The dom node |
| cls | <code>String</code> | The class to add |

<a name="module_dom.each"></a>

### dom.each(els, fn)
Iterate over a dom NodeList

**Kind**: static method of <code>[dom](#module_dom)</code>  

| Param | Type | Description |
| --- | --- | --- |
| els | <code>NodeList</code> | The NodeList (created using `getElementsByTagName` or `getElementsByClassName` or `querySelectorAll`) to loop over |
| fn | <code>function</code> | The function to run against each element. Arguments passed are the same as Array.forEach |

<a name="module_dom.filter"></a>

### dom.filter(els, fn) ⇒ <code>Array</code>
Filters a dom NodeList, returning an array of only those elements which match the predicate function

**Kind**: static method of <code>[dom](#module_dom)</code>  
**Returns**: <code>Array</code> - A filtered array of dom elements  

| Param | Type | Description |
| --- | --- | --- |
| els | <code>NodeList</code> | The NodeList (created using `getElementsByTagName` or `getElementsByClassName` or `querySelectorAll`) to filter |
| fn | <code>function</code> | The predicate function to test each Element against |

**Example**  
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
<a name="module_dom.getWindowDimensions"></a>

### dom.getWindowDimensions([w], [d]) ⇒ <code>windowDimensions</code>
Cross browser funtion for getting the dimensions of the window

**Kind**: static method of <code>[dom](#module_dom)</code>  
**Returns**: <code>windowDimensions</code> - The window dimensions  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [w] | <code>object</code> | <code>window</code> | The window element |
| [d] | <code>object</code> | <code>document</code> | The document element |

<a name="module_dom.hasClass"></a>

### dom.hasClass(el, cls)
Check if an element has a class

**Kind**: static method of <code>[dom](#module_dom)</code>  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>HTMLElement</code> | The dom node |
| cls | <code>String</code> | The classname to check |

<a name="module_dom.isHidden"></a>

### dom.isHidden(el) ⇒ <code>Boolean</code>
Check whether an element is hidden

**Kind**: static method of <code>[dom](#module_dom)</code>  
**Returns**: <code>Boolean</code> - True if `el` is visibly hidden, otherwise false  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>HTMLElement</code> | The dom node |

<a name="module_dom.isVisible"></a>

### dom.isVisible(el) ⇒ <code>Boolean</code>
Check whether an element is visible

**Kind**: static method of <code>[dom](#module_dom)</code>  
**Returns**: <code>Boolean</code> - True if `el` is visible, otherwise false  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>HTMLElement</code> | The dom node |

<a name="module_dom.onReady"></a>

### dom.onReady(fn)
A callback that fires when the document is ready - roughly equaivalent to jQuery document ready

**Kind**: static method of <code>[dom](#module_dom)</code>  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The callback to fire |

<a name="module_dom.removeClass"></a>

### dom.removeClass(el, cls)
Remove a class from an element

**Kind**: static method of <code>[dom](#module_dom)</code>  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>HTMLElement</code> | The dom node |
| cls | <code>String</code> | The class to remove |

<a name="module_dom.toggleClass"></a>

### dom.toggleClass(el, cls)
Toggle a class on an element

**Kind**: static method of <code>[dom](#module_dom)</code>  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>HTMLElement</code> | The dom node |
| cls | <code>String</code> | The class to toggle |

<a name="module_dom.wrap"></a>

### dom.wrap(el, argument1, [argument2])
Wrap an html element with another element or with a wrap function

**Kind**: static method of <code>[dom](#module_dom)</code>  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>HTMLElement</code> | The dom node |
| argument1 | <code>function</code> &#124; <code>HTMLElement</code> &#124; <code>string</code> | A callback function which is passed `el.outerHTML` as its only function parameter OR a dom node to wrap around the element OO the first of two string arguments to go before and after the element |
| [argument2] | <code>string</code> | The string to use for after the dom element (both `argument1` and `argument2` should be strings) |

**Example**  
Using a wrapper function:
```js
import { dom } from 'blue-js'

const foo = document.querySelector('#foo')
dom.wrap(foo, html => `<div class="wrapper">${html}</div>`)
```
**Example**  
Using an html element:
```js
import { dom } from 'blue-js'

const foo = document.querySelector('#foo')
const wrapper = document.createElement('div')
dom.wrap(foo, wrapper)
```
**Example**  
Using two strings:
```js
import { dom } from 'blue-js'

const foo = document.querySelector('#foo')
dom.wrap(foo, '<div class="wrapper">', '</div>')
```
<a name="module_dom.windowDimensions"></a>

### dom.windowDimensions : <code>Object</code>
**Kind**: static typedef of <code>[dom](#module_dom)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | Window width |
| height | <code>number</code> | Window height |

<a name="module_events"></a>

## events
A collection of event utility functions


* [events](#module_events)
    * [.listen(el, names, fn, capture)](#module_events.listen) ⇒ <code>Object</code>
    * [.listenCollection(els, names, fn, capture)](#module_events.listenCollection)
    * [.removeListeners(els, names)](#module_events.removeListeners)
    * [.trigger(el, name, [data], [eventProps])](#module_events.trigger)
    * ~~[.triggerCustom(el, name, [data], [eventProps])](#module_events.triggerCustom)~~

<a name="module_events.listen"></a>

### events.listen(el, names, fn, capture) ⇒ <code>Object</code>
Listen for one or more events (custom or standard)

**Kind**: static method of <code>[events](#module_events)</code>  
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
import { events } from 'blue-js'

const fooLink = document.querySelector('a.foo')

events.listen(fooLink, 'click', (event) => {
  event.preventDefault()
  const { target } = event
  target.classlist.add('.is-clicked')
})
```
**Example**  
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
**Example**  
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
<a name="module_events.listenCollection"></a>

### events.listenCollection(els, names, fn, capture)
Same as events.listen, excpet for NodeList rather than a single Element

**Kind**: static method of <code>[events](#module_events)</code>  

| Param | Type | Description |
| --- | --- | --- |
| els | <code>NodeList</code> | The dom collection |
| names | <code>String</code> | The event or events (space-separated) to listen for |
| fn | <code>function</code> | The callback to fire when the event occurs |
| capture | <code>Boolean</code> | Whether to capture the event or not |

<a name="module_events.removeListeners"></a>

### events.removeListeners(els, names)
Remove one or more events from one or more targets

**Kind**: static method of <code>[events](#module_events)</code>  

| Param | Type | Description |
| --- | --- | --- |
| els | <code>HTMLElement</code> | The dom element or any iterable containing dom elements (eg. NodeList) |
| names | <code>String</code> | The event or events (space separated) to remove the listeners for |

**Example**  
```js
import { events } from 'blue-js'

const fooLinks = document.querySelectorAll('a.foo')
events.removeListeners(fooLinks, 'click mouseenter')
```
<a name="module_events.trigger"></a>

### events.trigger(el, name, [data], [eventProps])
Trigger any event on a dom element, optionally pass data

**Kind**: static method of <code>[events](#module_events)</code>  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>HTMLElement</code> | The dom node |
| name | <code>String</code> | The event to trigger |
| [data] | <code>Object</code> | The data to pass along with the event |
| [eventProps] | <code>Object</code> | Other event properties to override the defaults, which are `{ bubbles: true, cancelable: true }` |

**Example**  
```js
import { events } from 'blue-js'

const fooLink = document.querySelector('a.foo')
events.trigger(fooLink, 'Link:Event', { foo: 'bar' })

// Listen for custom event and use the custom data passed to trigger
events.listen(fooLink, 'Link:Event', event => {
  console.log(event.detail.foo) // -> 'bar'
})
```
<a name="module_events.triggerCustom"></a>

### ~~events.triggerCustom(el, name, [data], [eventProps])~~
***Deprecated***

Trigger any custom event on a dom element

**Kind**: static method of <code>[events](#module_events)</code>  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>HTMLElement</code> | The dom node |
| name | <code>String</code> | The event to trigger |
| [data] | <code>Object</code> | The data to pass along with the event |
| [eventProps] | <code>Object</code> | Other event properties to override the defaults, which are `{ bubbles: true, cancelable: true }` |

**Example**  
```js
import { events } from 'blue-js'

const fooLink = document.querySelector('a.foo')
events.triggerCustom(fooLink, 'Link:Event', { foo: 'bar' })

// Listen for custom event and use the custom data passed to trigger
events.listen(fooLink, 'Link:Event', event => {
  console.log(event.detail.foo) // -> 'bar'
})
```
<a name="module_ps"></a>

## ps
This is a basic PubSub (Publish and Subscribe) implementation.

**See**: [https://davidwalsh.name/pubsub-javascript](https://davidwalsh.name/pubsub-javascript)  
**Author:** David Walsh  

* [ps](#module_ps)
    * _static_
        * [.subscribe(topic, handler)](#module_ps.subscribe)
        * [.publish(topic, [data])](#module_ps.publish)
    * _inner_
        * [~handler](#module_ps..handler) : <code>function</code>

<a name="module_ps.subscribe"></a>

### ps.subscribe(topic, handler)
Subscribe to a topic

**Kind**: static method of <code>[ps](#module_ps)</code>  

| Param | Type | Description |
| --- | --- | --- |
| topic | <code>string</code> | The topic name |
| handler | <code>handler</code> | The callback function |

**Example**  
```js
import { ps } from 'blue-js'

const resultsListener = ps.subscribe('Results:Returned', (results) => {
  // Do something with results
})

// Some time later, when I no longer want to listen to a topic

resultsListener.remove()
```
<a name="module_ps.publish"></a>

### ps.publish(topic, [data])
Publish an event with optional data

**Kind**: static method of <code>[ps](#module_ps)</code>  

| Param | Type | Description |
| --- | --- | --- |
| topic | <code>string</code> | The event name |
| [data] | <code>object</code> | The data to pass to any listeners |

**Example**  
```js
import { ps } from 'blue-js'

ps.publish('Results:Returned', ['item1', 'item2', 'item3'])
```
<a name="module_ps..handler"></a>

### ps~handler : <code>function</code>
The handler for topic events

**Kind**: inner typedef of <code>[ps](#module_ps)</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | The data passed when event was published |


## Contributing to blue-js

[Standard JS](http://standardjs.com/) applies

camelCase for function and variable names

[Github Flow](https://guides.github.com/introduction/flow/) - branch, submit pull requests

### Getting set up

- Pull the repo
- run `npm install`
- run `npm start` to run all unit tests, lint the codebase, and build the API docs
