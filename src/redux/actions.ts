import actionTypes from './actionTypes'
import { createAction } from 'redux-actions'

const getting_user = createAction(actionTypes.GETTING_USERS, () => {
  return {
    fetching: true,
    users: []
  }
})
const get_user = createAction(actionTypes.GET_USERS)

export default {
  get_user,
  getting_user
}