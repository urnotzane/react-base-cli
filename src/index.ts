import './index.scss'
import { join as _join } from 'lodash'

function component() {
  let element = document.createElement('div')

  element.innerHTML = _join(['Hello', 'zane', '!'], ' ')
  element.classList.add('hello')

  return element
}

document.body.appendChild(component())