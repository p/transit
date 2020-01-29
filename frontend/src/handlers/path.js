import actions from '../actions'
import * as d from '../deps'
import * as u from '../util'
import _ from 'underscore'
import React from 'react'
import Link from '../components/link'
import moment from 'moment'
import comp from '../components'

export default
@d.connect(props => ({
  stations: [['path', 'stations'], u.unim],
  trains: [['path', 'trains'], u.unim],
}))
class PathHandler extends React.Component {
  render() {
    if (!this.props.stations) {
      return <div>Loading...</div>
    }

    return (
      <comp.PathTimes
        stations={this.props.stations}
        trains={this.props.trains}
      />
    )
  }

  componentDidMount() {
    actions.fetch_path_times()
  }
}

PathHandler.propTypes = {}
