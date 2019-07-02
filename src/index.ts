// import _ from 'lodash'
import './index.css'

function component() {
  let element = document.createElement('div')

  element.innerHTML = _join(['Hello', 'zane', '!'], ' ')
  element.classList.add('hello')

  return element
}

document.body.appendChild(component())