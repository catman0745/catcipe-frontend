import actionTypes from './actionTypes'

const setCurrentUser = (username, token) => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: {
    username,
    token,
  },
})

const clearCurrentUser = () => ({
  type: actionTypes.CLEAR_CURRENT_USER,
})

const showAlert = (type, message) => ({
  type: actionTypes.SHOW_ALERT,
  payload: {
    message,
    type,
  },
})

const hideAlert = () => ({
  type: actionTypes.HIDE_ALERT,
})

const actions = {
  setCurrentUser,
  clearCurrentUser,

  showAlert,
  hideAlert,
}

export default actions
