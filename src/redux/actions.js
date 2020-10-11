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

const actions = {
  setCurrentUser,
  clearCurrentUser,
}

export default actions
