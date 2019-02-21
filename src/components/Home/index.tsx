import * as React from 'react'
import * as style from './index.less'

type Props = {}

export default class Home extends React.PureComponent<Props, {}> {
  render() {
    return (
      <h1 className={style.title}>Hello React</h1>
    )
  }
}