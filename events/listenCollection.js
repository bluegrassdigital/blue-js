var listen = require('./listen')
var apply = require('../lang/apply')

/**
Same as events.listen, excpet for NodeList rather than a single Element

@param {NodeList} els The dom collection
@param {String} name The event or events (space-separated) to listen for
@param {Function} fn The callback to fire when the event occurs
@memberof module:events
@alias listenCollection
@function
*/
module.exports = function listenCollection (els, names, fn, capture) {
  capture = !!capture
  apply(els, function (el) {
    listen(el, names, fn, capture)
  })
}
