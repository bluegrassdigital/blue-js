export const apply = (obj, fn) => {
  const array = Array.from(obj)
  if (array) {
    for (let i = 0; i < array.length; i++) {
      fn(array[i], i)
    }
  } else {
    fn(obj)
  }
}
