import * as React from 'react'
import './index.less'

type Props = {}

export default class Home extends React.PureComponent<Props, {}> {
  render() {
    return (
      <h1 className="title">Hello React</h1>
    )
  }
}