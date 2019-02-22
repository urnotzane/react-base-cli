import * as React from 'react'
import './index.less'

type Props = {}

export default class Home extends React.PureComponent<Props, {}> {
  componentDidMount() {
    console.log(this)
  }
  render() {
    return (
      <h1 className="title">Hello!Welcome to Home page.</h1>
    )
  }
}