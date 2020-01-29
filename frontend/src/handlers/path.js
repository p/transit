import actions from '../actions'
import * as d from '../deps'
import * as u from '../util'
import _ from 'underscore'
import React from 'react'
import Link from '../components/link'
import moment from 'moment'
import comp from '../components'

export default
@d.connect(props => ({}))
class PathHandler extends React.Component {
  render() {
    if (!this.props.path_times) {
      return <div>Loading...</div>
    }

    return <comp.PathTimes path_times={this.props.path_times} />
  }

  componentDidMount() {
    actions.fetch_path_times()
  }
}

PathHandler.propTypes = {}
