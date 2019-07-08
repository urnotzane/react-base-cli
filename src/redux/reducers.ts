import { combineReducers } from 'redux'

type Action = {
  type: string,
  state: any
}

export const say_hello_to = (state = 'zane', action: Action): string => {
  switch (action.type) {
    case 'REDUX':
      return 'redux'
    case 'REDUX_SAGA':
      return 'redux-saga'
    case 'REACT_REDUX':
      return 'react-redux'
    default:
      return state
  }
}

export default combineReducers({
  say_hello_to
})
