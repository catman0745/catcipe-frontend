import actionTypes from './actionTypes'

const setCurrentUser = (username, token) => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: {
    username,
    token,
  },
})

const actions = {
  setCurrentUser,
}

export default actions
