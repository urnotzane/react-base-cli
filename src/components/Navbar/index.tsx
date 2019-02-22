import * as React from 'react'
import { Link } from 'react-router-dom'
import './index.less'

type Props = {}

export default class Navbar extends React.PureComponent<Props, {}> {
  render() {
    return (
      <nav className="navbar-wrapper">
        <div className="navbar-main">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    )
  }
}