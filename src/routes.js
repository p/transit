import _ from 'underscore'

import AppBase from './app'
import Handlers from './handlers'

let routes = {
  Path: { path: '/' },
}

routes = _.mapObject(routes, (spec, key) =>
  Object.assign({ component: Handlers[key], wrapper: AppBase }, spec),
)

export default routes
