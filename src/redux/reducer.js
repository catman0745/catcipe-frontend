import actionTypes from './actionTypes'
import initialState from './initialState'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return { ...state, userSession: action.payload }
    case actionTypes.CLEAR_CURRENT_USER:
      return { ...state, userSession: undefined }

    case actionTypes.SHOW_ALERT:
      return {
        ...state,
        alert: { ...action.payload, open: true },
      }
    case actionTypes.HIDE_ALERT:
      return {
        ...state,
        alert: { ...state.alert, open: false },
      }

    default:
      return state
  }
}

export default reducer
