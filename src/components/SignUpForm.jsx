import React, { useState, useEffect } from 'react'
import { TextField, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import Form, { FormInputs, FormActions } from './Form'
import { signIn, signUp } from '../api'
import { store, actions } from '../redux'

const setCurrentUser = (username, token) => {
  localStorage.setItem('userSession', JSON.stringify({ username, token }))
  store.dispatch(actions.setCurrentUser(username, token))
}

const SignUpForm = ({ redirectTo }) => {
  const history = useHistory()

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
    const result = await signUp({ username, password })
    if (result.success) {
      store.dispatch(actions.showAlert('success', 'Signed up successfully'))
      const { token } = await signIn({ username, password })
      setCurrentUser(username, token)
      history.push(redirectTo)
    } else if (result.validationErrors) {
      setValidationErrors(result.validationErrors)
    } else {
      store.dispatch(actions.showAlert('warning', result.errorMessage))
      if (result.errorMessage === 'User with such username already exist') {
        setValidationErrors({ username: 'username already taken' })
      }
    }
  }

  return (
    <Form title="Sign up">
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
          Sign up
        </Button>
      </FormActions>
    </Form>
  )
}
SignUpForm.propTypes = {
  redirectTo: PropTypes.string,
}
SignUpForm.defaultProps = {
  redirectTo: '/',
}

export default SignUpForm
