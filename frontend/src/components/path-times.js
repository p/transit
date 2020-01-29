import _ from 'underscore'
import * as d from '../deps'
import * as u from '../util'
import React from 'react'

const STATION_SLUGS = [
  'thirty_third_street',
  'world_trade_center',
  'journal_square',
]

export default
@d.connect(props => ({
  stations: [['path','stations'],u.unim],
  trains: [['path','trains'],u.unim],
  
  }))
class PathTimes extends React.Component {
  render() {
    return <div>
    {_.map(STATION_SLUGS,slug=><div key={slug}>
      {this.props.stations[slug].name}
      </div>)}
    </div>
  }
}

PathTimes.propTypes = {}
