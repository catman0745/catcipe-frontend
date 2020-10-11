const equals = (obj1, obj2) => {
  if (obj1 === obj2) {
    return true
  }

  if (
    obj1 === undefined ||
    obj2 === undefined ||
    Object.keys(obj1) !== Object.keys(obj2)
  ) {
    return false
  }

  Object.keys(obj1).forEach((key) => {
    if (!obj2[key] || obj1[key] !== obj2[key]) {
      return false
    }
  })

  Object.keys(obj2).forEach((key) => {
    if (!obj1[key] || obj1[key] !== obj2[key]) {
      return false
    }
  })

  return true
}

export default equals
