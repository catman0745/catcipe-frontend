const valid = () => ({ isValid: true })
const invalid = (error) => ({ isValid: false, error })

const validateField = (name, value, { type, maxLength }) => {
  if (typeof value === 'undefined') {
    return invalid(`${name} required`)
  }
  if (typeof value !== type) {
    return invalid(`${name} must be of type ${type}`)
  }

  if (type === 'string') {
    const str = value.trim()

    if (str.length === 0) {
      return invalid(`${name} required`)
    }

    if (str.length > maxLength) {
      return invalid(`${name} cannot exceed ${maxLength} characters`)
    }
  }

  return valid()
}

const validate = (object, rules) => {
  const validationResult = {}

  Object.entries(rules).forEach(([fieldName, fieldRules]) => {
    const fieldValue = object[fieldName]
    const customFieldName = fieldRules.name

    const { isValid, error } = validateField(
      customFieldName || fieldName,
      fieldValue,
      fieldRules
    )
    if (!isValid) {
      validationResult[fieldName] = error
    }
  })

  return validationResult
}

export default validate
