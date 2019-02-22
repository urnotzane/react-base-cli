import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { polyfill } from 'es6-promise'
import registerServiceWorker from './sw'
import './style/index.less'
import App from './containers/App'

// 注册SserviceWorker
registerServiceWorker()
polyfill()

// type Props = {
//   foo: string;
// };

// class App extends React.PureComponent<Props, {}> {
//   render() {
//     return <span>{this.props.foo}</span>;
//   }
// }


const app = document.getElementById('app')
ReactDOM.render(<App />, app)