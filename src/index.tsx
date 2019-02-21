import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { polyfill } from 'es6-promise'
import registerServiceWorker from './sw'
import {Router, Route} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import routes from './routes'
import Home from './components/Home'

// 注册SserviceWorker
registerServiceWorker()
polyfill()

const history = createBrowserHistory()

// type Props = {
//   foo: string;
// };

// class App extends React.PureComponent<Props, {}> {
//   render() {
//     return <span>{this.props.foo}</span>;
//   }
// }

const App = () => (
  <Router history={history}>
    <Route path="/" component={Home} />
  </Router>
)


const app = document.getElementById('app')
ReactDOM.render(<App />, app)