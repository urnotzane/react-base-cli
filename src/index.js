// import _ from 'lodash'
import './index.css'
import bk from './bk.jpg'

function component() {
  let element = document.createElement('div');
  let obj1 = {
    a: 'a',
    b: 'b'
  }
  let obj2 = {
    c: 'c'
  }

  element.innerHTML = _join(['Hello', 'zane', '!'], ' ')
  element.classList.add('hello')
  document.body.style.background = 'url(' + bk + ') no-repeat center'

  console.log(Object.assign(obj1, obj2))
  return element
}

document.body.appendChild(component())