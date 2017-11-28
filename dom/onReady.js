'use strict';

exports.__esModule = true;
exports.default = onReady;
/**
A callback that fires when the document is ready - roughly equaivalent to jQuery document ready

@param {Function} fn The callback to fire
@memberof module:dom
@alias onReady
@function
*/
function onReady(fn) {
  if (document.readyState === 'complete' || document.readyState !== 'loading' && !document.documentElement.doScroll) {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}