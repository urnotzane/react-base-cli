import { polyfill } from 'es6-promise'
import './style/index.less'
import registerServiceWorker from './sw'
import * as _ from 'lodash'

// 注册SserviceWorker
registerServiceWorker()
polyfill()

function component() {
  var element = document.createElement('div');
  var button = document.createElement('button');
  var br = document.createElement('br');

  button.innerHTML = 'Click me and look at the console!';
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild(br);
  element.appendChild(button);
  element.setAttribute('class', 'view')

  button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    var print = module.default;

    print();
  });

  return element;
}

document.body.appendChild(component());