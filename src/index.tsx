import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { polyfill } from 'es6-promise'
import registerServiceWorker from './sw'
import './style/index.less'
import App from './containers/App'

polyfill()
// 注册ServiceWorker
registerServiceWorker()

const app = document.getElementById('app')
ReactDOM.render(<App />, app)