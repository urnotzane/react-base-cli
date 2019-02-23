import * as React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createHashHistory } from 'history';
import Navbar from '../../components/Navbar'
import routes from '../../routes'

const history = createHashHistory()


type Props = {}

export default class App extends React.PureComponent<Props, {}> {
  render() {
    return (
      <Router history={history}>
        <div>
          <Navbar />
          <Switch>
            {routes.map((item, index) => <Route exact={item.path==='/'} key={index}  path={item.path} component={item.component} />)}
          </Switch>
        </div>
      </Router>
    )
  }
}