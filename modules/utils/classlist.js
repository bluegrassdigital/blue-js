export function splitClass (str) {
  return str.replace(/ {1,}/g, ',').split(',')
}

export function filterClass (str, cls) {
  return splitClass(str).filter(function (match) {
    return match !== cls && match !== ''
  }).join(' ')
}
