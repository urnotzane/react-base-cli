import * as React from 'react'
import * as styles from './index.less'

type Props = {}

export default class Home extends React.PureComponent<Props, {}> {
  componentDidMount() {
    console.log(this)
  }
  render() {
    return (
      <h1 className={styles.title}>Hello!Welcome to Home page.</h1>
    )
  }
}