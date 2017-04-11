var listeners = []

var addListener = exports.addListener = function (el, evt, fn, capture) {
  el.addEventListener(evt, fn, capture)
  listeners.push({
    el: el,
    evt: evt,
    fn: fn,
    capture: capture
  })
}

var removeListener = exports.removeListener = function (el, evt) {
  var registered = listeners.filter(function (listener) {
    return listener.el === el && listener.evt === evt
  })

  registered.forEach(function (listener) {
    listener.el.removeEventListener(listener.evt, listener.fn, listener.capture)
  })
}

exports.removeSpecificListeners = function (el, names, fn, capture) {
  names.forEach(function (evt) {
    el.removeEventListener(evt, fn, capture)
  })
}

exports.listenMultipleEvents = function (el, evts, fn, capture) {
  capture = !!capture
  evts.forEach(function (evt) {
    addListener(el, evt, fn, capture)
  })
}

exports.removeMultipleListeners = function (el, evts) {
  evts.forEach(function (evt) {
    removeListener(el, evt)
  })
}
