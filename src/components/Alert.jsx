import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import PropTypes from 'prop-types'

const Alert = ({ open, message, type, onClose, autoHideDuration }) => {
  const handleClose = (event, reason) => {
    if (reason !== 'clickaway') {
      onClose()
    }
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        severity={type}
        onClose={handleClose}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  )
}
Alert.propTypes = {
  open: PropTypes.bool,
  message: PropTypes.string,
  type: PropTypes.string,
  onClose: PropTypes.func,
  autoHideDuration: PropTypes.number,
}
Alert.defaultProps = {
  open: false,
  message: '',
  type: '',
  onClose: () => {},
  autoHideDuration: 5000,
}

export default Alert
