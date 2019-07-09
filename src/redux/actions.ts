import actionTypes from './actionTypes'
import { createAction } from 'redux-actions'

const say_redux = createAction(actionTypes.REDUX, () =>  'redux')

const say_redux_saga = createAction(actionTypes.REDUX_SAGA, () => 'redux-saga')

const say_redux_async = createAction(actionTypes.REDUX_ASYNC, () => 'redux-async')

export default {
  say_redux,
  say_redux_async,
  say_redux_saga,
}