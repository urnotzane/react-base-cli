import * as React from 'react'
import CSSModules from 'react-css-modules';
import styles from './index.scss'

@CSSModules(styles)
class Index extends React.PureComponent {
  render() {
    return <div styleName='hello'>你好！</div>
  }
}

export default Index
