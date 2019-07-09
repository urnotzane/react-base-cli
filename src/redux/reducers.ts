import { combineReducers } from 'redux'
import actionsTypes from './actionTypes'
import { handleActions } from 'redux-actions'

const hello = handleActions({
  [actionsTypes.REDUX]: (state: any, action) => {
    return {
      ...state,
      name: action.payload
    }
  },
  [actionsTypes.REDUX_SAGA]: (state: any, action) => {
    return {
      ...state,
      name: action.payload
    }
  },
}, { name: 'zane' })

export default combineReducers({
  hello
})
