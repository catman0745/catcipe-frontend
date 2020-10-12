import React from 'react'
import { Grid, Button, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Center from '../Center'
import { actions, store } from '../../redux'

const signOut = () => {
  localStorage.removeItem('userSession')
  store.dispatch(actions.clearCurrentUser())
}

const SignedControls = ({ username }) => (
  <Grid container spacing={2}>
    <Grid item>
      <Center>
        <Typography variant="subtitle1">Welcome {username}!</Typography>
      </Center>
    </Grid>
    <Grid item>
      <Button variant="contained" onClick={signOut}>
        Sign out
      </Button>
    </Grid>
  </Grid>
)
SignedControls.propTypes = {
  username: PropTypes.string.isRequired,
}

const SignControls = () => (
  <Grid container spacing={2}>
    <Grid item>
      <Link to="/signin">
        <Button variant="contained">Sign in</Button>
      </Link>
    </Grid>
  </Grid>
)

const AccountControls = ({ username }) => {
  return username ? <SignedControls username={username} /> : <SignControls />
}
AccountControls.propTypes = {
  username: PropTypes.string,
}
AccountControls.defaultProps = {
  username: '',
}

export default AccountControls
