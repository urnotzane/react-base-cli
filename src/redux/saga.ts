import { put, takeEvery, all, call } from 'redux-saga/effects'
import actionTypes from './actionTypes'
import { getUsers } from '../http'

export function* get_user() {
  const res = yield call(getUsers)
  yield put({
    type: actionTypes.GETTING_USERS,
    payload: {
      fetching: false,
      users: res.data
    }
  })
}

export function* watch_get_user() {
  yield takeEvery(actionTypes.GET_USERS, get_user)
}

export default function* rootSaga() {
  yield all([
    watch_get_user(),
  ])
}