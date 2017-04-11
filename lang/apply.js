module.exports = function apply (obj, fn) {
  if (obj.length) {
    for (var i = 0; i < obj.length; i++) {
      fn(obj[i], i)
    }
  } else {
    fn(obj)
  }
}
