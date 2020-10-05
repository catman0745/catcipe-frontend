import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/">
          <Typography variant="h6">Catcipe</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Header
