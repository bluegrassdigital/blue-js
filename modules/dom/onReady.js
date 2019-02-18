/**
A callback that fires when the document is ready - roughly equaivalent to jQuery document ready

@param {Function} fn The callback to fire
@memberof module:blue
@alias .onReady
@function
*/
export default function onReady (fn) {
  if (
    document.readyState === 'complete' ||
    (document.readyState !== 'loading' && !document.documentElement.doScroll)
  ) {
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}
