import React from 'react'
import { Grid, Button, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Center from './Center'

const SignedControls = ({ username, signOut }) => (
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
  signOut: PropTypes.func.isRequired,
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

const AccountControls = ({ username, signOut }) => {
  if (username) {
    return <SignedControls username={username} signOut={signOut} />
  }

  return <SignControls />
}
AccountControls.propTypes = {
  username: PropTypes.string,
  signOut: PropTypes.func.isRequired,
}
AccountControls.defaultProps = {
  username: '',
}

export default AccountControls
