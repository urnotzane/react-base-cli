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

  useEffect(() => {
    props.get_user()
  }, [])

  return (
    <div styleName='container'>
      <h1 styleName='title'>{props.fetching ? '加载中...' : 'Hello Github!'}</h1>
      <main styleName='main-list'>
        {props.users.map((item: any) =>
          <div styleName='user' key={item.id}>
            <div styleName='avatar'><img src={item.avatar_url} /></div>
            <div styleName='info'>
              <div>{item.login}</div>
            </div>
          </div>)}
      </main>
    </div>
  )
}

Index.defaultProps = {
  users: [],
  fetching: false
}

const map_state_to_props = (state: any) => {
  return { ...state.getting_user };
};

const map_dispatch_to_props = (dispatch: any) => {
  return bindActionCreators(
    { get_user: actions.get_user },
    dispatch,
  );
};

export default connect(
  map_state_to_props,
  map_dispatch_to_props,
)(CSSModules(Index, styles))
