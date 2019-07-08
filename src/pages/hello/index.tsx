import * as React from 'react'
import CSSModules from 'react-css-modules';
import styles from './index.scss'
import _ from 'lodash';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { say_hello_to } from '../../redux/reducers'

const { useState, useEffect } = React

interface Props {
  say_hello: () => string
}
const Index = (props: Props) => {
  const [hello, setHello] = useState('加载中...')

  useEffect(() => {
    console.log(props.say_hello)
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

const map_state_to_props = (state: any) => {
  return {
    name: state.say_hello_to
  };
};

const map_dispatch_to_props = (dispatch: any) => {
  return bindActionCreators(
    { say_hello_to },
    dispatch,
  );
};

export default connect(
  map_state_to_props,
  map_dispatch_to_props,
)(CSSModules(Index, styles))
