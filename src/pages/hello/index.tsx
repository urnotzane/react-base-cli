import * as React from 'react'
import CSSModules from 'react-css-modules';
import styles from './index.scss'
import _ from 'lodash';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../redux/actions'

const { useState, useEffect } = React


const Index = (props: any) => {
  const [hello, setHello] = useState('加载中...')
  console.log(props)

  useEffect(() => {
    new Promise(resolve => {
      setTimeout(() => {
        const arr = ['Hello', 'to ']
        resolve(_.join(arr, ' '))
      }, 3000);
    }).then((res: string) => setHello(res))
  }, [hello])

  return (
    <div styleName='hello'>
      <div>{hello + props.name}</div>
      <div styleName='btn' onClick={props.say_redux}>redux</div>
      <div styleName='btn' onClick={props.say_redux_saga}>redux-saga</div>
      <div styleName='btn' onClick={props.say_redux_async}>redux async</div>
    </div>
  )
}

const map_state_to_props = (state: any) => {
  console.log(state)
  return { ...state.hello };
};

const map_dispatch_to_props = (dispatch: any) => {
  return bindActionCreators(
    { ...actions },
    dispatch,
  );
};

export default connect(
  map_state_to_props,
  map_dispatch_to_props,
)(CSSModules(Index, styles))
