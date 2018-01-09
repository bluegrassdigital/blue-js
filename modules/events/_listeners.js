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
  var filteredListeners = []

  for (var i = 0; i < listeners.length; i++) {
    var listener = listeners[i]
    if (listener.el === el && listener.evt === evt) {
      listener.el.removeEventListener(listener.evt, listener.fn, listener.capture)
    } else {
      filteredListeners.push(listener)
    }
  }

  listeners = filteredListeners
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
