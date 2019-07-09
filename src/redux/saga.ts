import { delay, put, takeEvery, all } from 'redux-saga/effects'
import actionTypes from './actionTypes'

export function* say_redux() {
  yield delay(1000)
  yield put({ type: actionTypes.REDUX })
}

export function* watch_say_redux() {
  yield takeEvery(actionTypes.REDUX_ASYNC, say_redux)
}

export default function* rootSaga() {
  yield all([
    watch_say_redux()
  ])
}