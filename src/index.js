import {join} from 'lodash'
import './index.css'
import bk from './bk.jpg'

function component() {
  var element = document.createElement('div')

  element.innerHTML = join(['Hello', 'zane', '!'], ' ')
  element.classList.add('hello')
  document.body.style.background = 'url('+ bk + ') no-repeat center'
  
  return element
}

document.body.appendChild(component())