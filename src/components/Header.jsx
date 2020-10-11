import React, { useState } from 'react'
import { AppBar, Toolbar, Box, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { actions, store } from '../redux'
import AccountControls from './AccountControls'

const signOut = () => {
  localStorage.removeItem('userSession')
  store.dispatch(actions.clearCurrentUser())
}

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
        <Box display="flex" width={1}>
          <AppLogo />
          <Box flexGrow={1} />
          <Box flexGrow={0}>
            <AccountControls
              username={userSession && userSession.username}
              signOut={signOut}
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
