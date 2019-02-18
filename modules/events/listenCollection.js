import listen from './listen'
import apply from '../lang/apply'

/**
Same as events.listen, excpet for NodeList rather than a single Element

@param {NodeList} els The dom collection
@param {String} names The event or events (space-separated) to listen for
@param {Function} fn The callback to fire when the event occurs
@param {Boolean} capture Whether to capture the event or not
@memberof module:blue
@alias .listenCollection
@function
*/
export default function listenCollection (els, names, fn, capture) {
  capture = !!capture
  apply(els, function (el) {
    listen(el, names, fn, capture)
  })
}
