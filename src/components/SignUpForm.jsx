import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import Form, { FormField, FormInputs, FormActions } from './Form'
import { signIn, signUp } from '../api'
import { store, actions } from '../redux'
import validate from '../utils/validate'

const setCurrentUser = (username, token) => {
  localStorage.setItem('userSession', JSON.stringify({ username, token }))
  store.dispatch(actions.setCurrentUser(username, token))
}

const clientSideValidationRules = {
  username: { type: 'string', maxLength: 30 },
  password: { type: 'string', maxLength: 30 },
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
    const user = { username, password }
    const clientSideValidationErrors = validate(user, clientSideValidationRules)
    if (Object.keys(clientSideValidationErrors).length !== 0) {
      setValidationErrors(clientSideValidationErrors)
      return
    }

    const result = await signUp(user)
    if (result.success) {
      store.dispatch(actions.showAlert('success', 'Signed up successfully'))
      const { token } = await signIn(user)
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
        <FormField
          error={!!validationErrors.username}
          helperText={validationErrors.username}
          required
          label="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <FormField
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
