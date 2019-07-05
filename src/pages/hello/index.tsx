import * as React from 'react'
import CSSModules from 'react-css-modules';
import styles from './index.scss'
import _ from 'lodash';

const { useState, useEffect } = React

const Index = () => {
  const [hello, setHello] = useState('加载中...')

  useEffect(() => {
    new Promise(resolve => {
      setTimeout(() => {
        const arr = ['Hello', 'world!']
        resolve(_.join(arr, ' '))
      }, 3000);
    }).then((res: string) => setHello(res))
  })

  return (
    <div styleName='hello'>{hello}</div>
  )
}

export default CSSModules(Index, styles)
