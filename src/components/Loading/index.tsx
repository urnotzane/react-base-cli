import * as React from 'react'
import * as styles from './index.less'

type Props = {}

export default class Navbar extends React.PureComponent<Props, {}> {
  render() {
    return (
      <div className={styles.loading_wrapper}>
        <div className={styles.loading_spin}></div>
      </div>
    )
  }
}