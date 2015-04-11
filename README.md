# Ember-deprecated-string-fmt [![Build Status](https://travis-ci.org/justinwoo/ember-deprecated-string-fmt.svg)](https://travis-ci.org/justinwoo/ember-deprecated-string-fmt)

Allows you to deprecate Ember.String.fmt usage by monkey-patching Ember.String.fmt.

![](https://s3.amazonaws.com/f.cl.ly/items/2s2F182w451a0V0i420B/Image%202015-04-11%20at%204.11.45%20PM.png)

## Usage

```js
// app.js
import initializeDeprecationWarning from 'ember-deprecated-string-fmt';

initializeDeprecationWarning();
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
