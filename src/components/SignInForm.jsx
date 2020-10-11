import React, { useState, useEffect } from 'react'
import { TextField, Button } from '@material-ui/core'
import Form, { FormInputs, FormActions } from './Form'
import signIn from '../api/signIn'
import { store, actions } from '../redux'

const setCurrentUser = (username, token) => {
  localStorage.setItem('userSession', JSON.stringify({ username, token }))
  store.dispatch(actions.setCurrentUser(username, token))
}

const SignInForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [validationErrors, setValidationErrors] = useState({})
  useEffect(() => {
    setValidationErrors((errors) => ({ ...errors, username: '' }))
  }, [username])
  useEffect(() => {
    setValidationErrors((errors) => ({ ...errors, password: '' }))
  }, [password])

  const handleSubmit = async () => {
    const result = await signIn({ username, password })
    if (result.success) {
      setCurrentUser(username, result.token)
      store.dispatch(actions.showAlert('success', 'Signed in successfully'))
    } else if (result.validationErrors) {
      setValidationErrors(result.validationErrors)
    } else {
      store.dispatch(actions.showAlert('warning', result.errorMessage))
    }
  }

  return (
    <Form title="Sign in">
      <FormInputs>
        <TextField
          error={!!validationErrors.username}
          helperText={validationErrors.username}
          required
          label="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          error={!!validationErrors.password}
          helperText={validationErrors.password}
          required
          label="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormInputs>
      <FormActions>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Sign in
        </Button>
      </FormActions>
    </Form>
  )
}

export default SignInForm
