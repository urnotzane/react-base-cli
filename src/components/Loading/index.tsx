import * as React from 'react'
import * as styles from './index.less'

type Props = {
  isLoading: boolean,
  pastDelay: boolean,
  timedOut: boolean,
  error: boolean,
  retry: () => void,
}

export default class Loading extends React.PureComponent<Props, {}> {
  componentDidMount() {
    console.log(this)
  }
  loadingChoose() {
    const { error, pastDelay } = this.props
    if (error) {
      return <div>Error!</div>;
    } else if (pastDelay) {
      return (
        <div className={styles.loading_wrapper}>
          <div className={styles.loading_spin}></div>
        </div>
      );
    } else {
      return null;
    }
  }
  render() {
    return this.loadingChoose()
  }
}