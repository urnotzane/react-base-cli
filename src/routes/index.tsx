import * as React from 'react'
import Loading from '../components/Loading'
import * as Loadable from 'react-loadable'

type Props = {}

const HomeComponent = Loadable({
  loader: () => import('../containers/Home'),
  loading: Loading,
})

class Home extends React.PureComponent<Props, {}> {
  render() {
    return (<HomeComponent {...this.props} />)
  }
}

const AboutComponent = Loadable({
  loader: () => import('../containers/About'),
  loading: Loading,
})

class About extends React.PureComponent<Props, {}>{
  render() {
    return <AboutComponent {...this.props} />
  }
}

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'About',
    path: '/about',
    component: About
  }
]

export default routes