var listeners = []

export function addListener (el, evt, fn, capture) {
  el.addEventListener(evt, fn, capture)
  listeners.push({
    el: el,
    evt: evt,
    fn: fn,
    capture: capture
  })
}

export function removeListener (el, evt) {
  var registered = listeners.filter(function (listener) {
    return listener.el === el && listener.evt === evt
  })

  registered.forEach(function (listener) {
    listener.el.removeEventListener(listener.evt, listener.fn, listener.capture)
  })
}

export function removeSpecificListeners (el, names, fn, capture) {
  names.forEach(function (evt) {
    el.removeEventListener(evt, fn, capture)
  })
}

export function listenMultipleEvents (el, evts, fn, capture) {
  capture = !!capture
  evts.forEach(function (evt) {
    addListener(el, evt, fn, capture)
  })
}

export function removeMultipleListeners (el, evts) {
  evts.forEach(function (evt) {
    removeListener(el, evt)
  })
}
