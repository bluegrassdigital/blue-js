# blue-js

[![Build Status](https://travis-ci.org/bluegrassdigital/blue-js.svg?branch=master)](https://travis-ci.org/bluegrassdigital/blue-js) [![npm version](https://badge.fury.io/js/blue-js.svg)](https://badge.fury.io/js/blue-js) [![Greenkeeper badge](https://badges.greenkeeper.io/bluegrassdigital/blue-js.svg)](https://greenkeeper.io/) [![codecov](https://codecov.io/gh/bluegrassdigital/blue-js/branch/master/graph/badge.svg)](https://codecov.io/gh/bluegrassdigital/blue-js) [![gzip size](https://img.badgesize.io/https://unpkg.com/blue-js/umd/blue-js.min.js?compression=gzip)](https://unpkg.com/blue-js/umd/blue-js.min.js)

**blue-js** is a super lightweight commonjs javascript dom & events library

This library is developed and maintained internally at [bluegrassdigital](http://www.bluegrassdigital.com)

## Installation

`npm install blue-js`

### Upgrading from V2

The top level module exports dom , events and ps are gone, all methods are exported directly from the root module, muvh like lodash.

The pubsub implementation ps has been removed as it was somewhat outside the scope of this library - please use something like https://github.com/developit/mitt instead.

## API

{{>main}}

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
