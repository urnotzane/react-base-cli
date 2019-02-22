import * as React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createHashHistory } from 'history';
import Home from '../Home'
import About from '../About'
import Navbar from '../../components/Navbar'

const history = createHashHistory()

type Props = {}

export default class App extends React.PureComponent<Props, {}> {
  render() {
    return (
      <Router history={history}>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    )
  }
}