export default function apply (obj, fn) {
  if (typeof obj.length !== 'undefined' && obj.length >= 0) {
    for (var i = 0; i < obj.length; i++) {
      fn(obj[i], i)
    }
  } else {
    fn(obj)
  }
}
