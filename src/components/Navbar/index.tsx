import * as React from 'react'
import { Link } from 'react-router-dom'
import * as styles from './index.less'

type Props = {}

export default class Navbar extends React.PureComponent<Props, {}> {
  render() {
    return (
      <nav className={styles.navbar_wrapper}>
        <div className={styles.navbar_main}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    )
  }
}