import React from 'react'
import { Router } from './deps'
import { hot } from 'react-hot-loader'

import history from './history'
import routes from './routes'
import reactor from './reactor'

import { Provider, connect } from 'nuclear-js-react-addons-chefsplate'

class Root extends React.Component {
  render() {
    return (
      <Provider reactor={reactor}>
        <Router history={history} routes={routes} />
      </Provider>
    )
  }
}

export default hot(module)(Root)

import './stores'
