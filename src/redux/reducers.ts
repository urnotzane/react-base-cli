import { combineReducers } from 'redux'
import actionsTypes from './actionTypes'
import { handleAction } from 'redux-actions'

const getting_user = handleAction(actionsTypes.GETTING_USERS, (_state: any, action) => {
  return {
    ...action.payload
  }
}, {fethcing: true, users: []})

export default combineReducers({
  getting_user,
})
