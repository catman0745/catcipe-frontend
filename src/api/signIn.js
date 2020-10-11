const signIn = async (user) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  }
  const response = await fetch(
    'http://localhost:5000/api/users/login',
    requestOptions
  )

  const result = await response.json()
  return {
    success: result.success,
    errorMessage: result.errorMessage,
    validationErrors: result.errors,
    username: result.payload && result.payload.username,
    token: result.payload && result.payload.token,
  }
}

export default signIn
