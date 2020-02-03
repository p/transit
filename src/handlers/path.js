import actions from '../actions'
import * as d from '../deps'
import * as u from '../util'
import _ from 'underscore'
import React from 'react'
import moment from 'moment'
import * as c from '../components'

export default
@d.connect(props => ({
  stations: [['path', 'stations'], u.unim],
  trains: [['path', 'trains'], u.unim],
}))
class PathHandler extends React.Component {
  render() {
    if (!this.props.stations || !this.props.trains) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <c.JsLink onClick={this.refresh.bind(this)}>Refresh</c.JsLink>
        <c.PathTimes
          stations={this.props.stations}
          trains={this.props.trains}
        />
      </div>
    )
  }

  componentDidMount() {
    this.refresh()
  }

  componentDidUpdate() {
    if (!this.props.stations) {
      this.refresh()
    }
  }
  refresh() {
    actions.fetch_path_times()
  }
}

PathHandler.propTypes = {}
