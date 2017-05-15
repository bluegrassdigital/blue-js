var splitClass = exports.splitClass = function (str) {
  return str.replace(/ {1,}/g, ',').split(',')
}

exports.filterClass = function (str, cls) {
  return splitClass(str).filter(function (match) {
    return match !== cls && match !== ''
  }).join(' ')
}
