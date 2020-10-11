import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import store from '../redux/store'

const sessionsAreSame = (userSession, updatedSession) => {
  if (userSession === undefined || updatedSession === undefined) {
    return userSession === updatedSession
  }

  return (
    userSession.username === updatedSession.username &&
    userSession.token === updatedSession.token
  )
}

const AppLogo = () => {
  return (
    <Link to="/">
      <Typography variant="h6">Catcipe</Typography>
    </Link>
  )
}

const Spacer = styled.div`
  flex-grow: 1;
`

const AccountControls = ({ username }) => {
  if (username) {
    return <Typography variant="subtitle1">Welcome {username}!</Typography>
  }

  return (
    <Link to="/signin">
      <Button variant="contained">Sign in</Button>
    </Link>
  )
}
AccountControls.propTypes = {
  username: PropTypes.string,
}
AccountControls.defaultProps = {
  username: '',
}

const Header = () => {
  const [userSession, setUserSession] = useState(store.getState().userSession)

  const stateUpdateHandler = () => {
    const updatedState = store.getState()
    if (!sessionsAreSame(userSession, updatedState.userSession)) {
      setUserSession(updatedState.userSession)
    }
  }

  store.subscribe(stateUpdateHandler)

  return (
    <AppBar position="static">
      <Toolbar>
        <AppLogo />
        <Spacer />
        <AccountControls username={userSession && userSession.username} />
      </Toolbar>
    </AppBar>
  )
}

export default Header
