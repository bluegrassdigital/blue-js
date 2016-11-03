# blue-js

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

{{>main}}

## Contributing to blue-js

[Standard JS](http://standardjs.com/) applies

camelCase for function and variable names

[Github Flow](https://guides.github.com/introduction/flow/) - branch, submit pull requests

### Getting set up

- Pull the repo
- run `npm install`
- run `gulp` to build from the `*.es6.js` files to the compiled `*.js` files
