import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {say_hello} from './saga'
import reducers from './reducers'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(say_hello)

export default store





