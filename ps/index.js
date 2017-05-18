/**
This is a basic PubSub (Publish and Subscribe) implementation.

@author David Walsh
@see {@link https://davidwalsh.name/pubsub-javascript}
@module ps
*/
var topics = {}
var hOP = topics.hasOwnProperty

/**
Subscribe to a topic

@param {string} topic The topic name
@param {handler} handler The callback function
@example
```js
import { ps } from 'blue-js'

const resultsListener = ps.subscribe('Results:Returned', (results) => {
  // Do something with results
})

// Some time later, when I no longer want to listen to a topic

resultsListener.remove()
```
@function
*/
exports.subscribe = function subscribe (topic, handler) {
  // Create the topic's object if not yet created
  if (!hOP.call(topics, topic)) topics[topic] = []

  // Add the listener to queue
  var index = topics[topic].push(handler) - 1

  // Provide handle back for removal of topic
  return {
    remove: function () {
      delete topics[topic][index]
    }
  }
}

/**
The handler for topic events
@callback handler
@param {object} data The data passed when event was published
*/

/**
Publish an event with optional data
@param {string} topic The event name
@param {object} [data] The data to pass to any listeners
@example
```js
import { ps } from 'blue-js'

ps.publish('Results:Returned', ['item1', 'item2', 'item3'])
```
@function
*/
exports.publish = function publish (topic, data) {
  // If the topic doesn't exist, or there's no listeners in queue, just leave
  if (!hOP.call(topics, topic)) return

  // Cycle through topics queue, fire!
  topics[topic].forEach(function (item) {
    item(data == null ? {} : data)
  })
}
