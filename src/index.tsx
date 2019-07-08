import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.scss'
import Index from './pages/hello'
import { Provider } from 'react-redux'
import store from './redux/store'


const app = document.getElementById('app')
ReactDOM.render(<Provider store={store}><Index /></Provider>, app)