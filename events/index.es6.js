import * as lang from '../lang'

/**
 * A collection of javascript event utility functions
 *
 * @module events
 */

// Polyfill CustomEvent
;(function () {
  function CustomEvent (event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined }
    var evt = document.createEvent('CustomEvent')
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail)
    return evt
  }

  CustomEvent.prototype = window.Event.prototype

  window.CustomEvent = CustomEvent
})()

const create = function () {
  const event = document.createEvent('HTMLEvents')
  event.initEvent(...arguments)
  return event
}

const createCustom = (name, data = {}, eventProps = {}) => {
  return new window.CustomEvent(name, {detail: data, bubbles: true, cancelable: true, ...eventProps})
}

let listeners = []

const addListener = (el, evt, fn, capture) => {
  el.addEventListener(evt, fn, capture)
  listeners.push({
    el,
    evt,
    fn,
    capture
  })
}

const removeListener = (el, evt) => {
  const registered = listeners.filter(listener => listener.el === el && listener.evt === evt)

  registered.forEach(listener => {
    listener.el.removeEventListener(listener.evt, listener.handler, listener.capture)
  })
}

const removeSpecificListeners = (el, name, fn, capture) => {
  const eventNames = name.split(' ')
  eventNames.forEach((evt) => {
    el.removeEventListener(evt, fn, capture)
  })
}

const listenMultipleEvents = (el, evts, fn, capture = false) => {
  evts.forEach((evt) => {
    addListener(el, evt, fn, capture)
  })
}

const removeMultipleListeners = (el, evts) => {
  evts.forEach((evt) => {
    removeListener(el, evt)
  })
}

/**
 * Trigger a standard dom event (eg. `click` `scroll` etc.) on a dom element
 *
 * @param {HTMLElement} el The dom node
 * @param {String} name The event to trigger
 * @example
 * import { events } from 'blue-js'
 *
 * const fooLink = document.querySelector('a.foo')
 *
 * events.trigger(fooLink, 'click')
 * @function
 */
export const trigger = (el, name) => {
  el.dispatchEvent(create(name))
}

/**
 * Trigger any custom event on a dom element
 *
 * @param {HTMLElement} el The dom node
 * @param {String} name The event to trigger
 * @param {Object} [data] The data to pass along with the event
 * @param {Object} [eventProps] Other event properties to override the defaults, which are `{ bubbles: true, cancelable: true }`
 * @example
 * import { events } from 'blue-js'
 *
 * const fooLink = document.querySelector('a.foo')
 *
 * events.triggerCustom(fooLink, 'Link:Event', { foo: 'bar' })
 *
 * // Listen for custom event and use the custom data passed to trigger
 * events.listen(fooLink, 'Link:Event', event => {
 *   console.log(event.detail.foo) // -> 'bar'
 * })
 * @function
 */
export const triggerCustom = (el, name, data, eventProps) => {
  el.dispatchEvent(createCustom(name, data, eventProps))
}

/**
 * Listen for one or more events (custom or standard)
 *
 * @param {HTMLElement} el The dom element
 * @param {String} name The event or events (space-separated) to listen for
 * @param {Function} fn The callback to fire when the event occurs
 * @returns {{remove: function}} An object with a `remove` method to remove the listener later
 * @example
 * import { events } from 'blue-js'
 *
 * const fooLink = document.querySelector('a.foo')
 *
 * events.listen(fooLink, 'click', (event) => {
 *   event.preventDefault()
 *   const { target } = event
 *   target.classlist.add('.is-clicked')
 * })
 * @example
 * // Remove listener later
 * import { events } from 'blue-js'
 *
 * const fooLink = document.querySelector('a.foo')
 *
 * const listener = events.listen(fooLink, 'click', (event) => {
 *   event.preventDefault()
 *   const { target } = event
 *   target.classlist.add('.is-clicked')
 * })
 * //Some time later
 * listener.remove()
 * @example
 * // Remove listener immediately
 * import { events } from 'blue-js'
 *
 * const fooLink = document.querySelector('a.foo')
 *
 * const listener = events.listen(fooLink, 'click', (event) => {
 *   event.preventDefault()
 *   const { target } = event
 *   target.classlist.add('.is-clicked')
 *   listener.remove()
 * })
 * @function
 */
export const listen = (el, names, fn, capture = false) => {
  names = names.split(' ')
  listenMultipleEvents(el, names, fn, capture)
  return {
    remove: removeSpecificListeners.bind(this, el, names, fn, capture)
  }
}

export const listenCollection = (els, names, fn, capture = false) => {
  lang.apply(els, el => listen(el, names, fn, capture))
}

/**
 * Remove one or more events from one or more targets
 *
 * @param {HTMLElement} els The dom element or any iterable containing dom elements (eg. NodeList)
 * @param {String} names The event or events (space separated) to remove the listeners for
 * @function
 * @example
 * import { events } from 'blue-js'
 *
 * const fooLinks = document.querySelectorAll('a.foo')
 *
 * events.removeListeners(fooLinks, 'click mouseenter')
 */
export const removeListeners = (el, names) => {
  const eventNames = names.split(' ')
  removeMultipleListeners(el, eventNames)
}
