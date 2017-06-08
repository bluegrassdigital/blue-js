module.exports = function createCustom (name, data, eventProps) {
  function CustomEvent (event, params) {
    var evt = document.createEvent('CustomEvent')
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail)
    return evt
  }
  CustomEvent.prototype = window.Event.prototype
  data = data || {}
  eventProps = eventProps || {}
  var UseEvent = typeof window.CustomEvent === 'function' ? window.CustomEvent : CustomEvent
  var params = {
    detail: data,
    bubbles: typeof eventProps.bubbles === 'boolean' ? eventProps.bubbles : true,
    cancelable: typeof eventProps.cancelable === 'boolean' ? eventProps.cancelable : true
  }
  return new UseEvent(name, params)
}
