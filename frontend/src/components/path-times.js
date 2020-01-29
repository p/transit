import * as t from '../types'
import _ from 'underscore'
import * as d from '../deps'
import * as u from '../util'
import React from 'react'

const STATION_SLUGS = [
  'thirty_third_street',
  'world_trade_center',
  'journal_square',
]

class Station extends React.Component{
  render(){
    if (this.props.trains===undefined){
      return <p>Loading...</p>
    }
    
    //alert(JSON.stringify(this.props.trains))
    t.list(t.PathApiTrain)(this.props.trains)
    return <div><h2>{this.props.station.name}</h2>
    <div>Next train: {_.map(this.props.trains,train=>
      <p key={`${train.lineName}--${train.projectedArrival}`}>{train.projectedArrival}</p>)}</div>
    </div>
  }
}

export default
class PathTimes extends React.Component {
  render() {
    return <div>
    {_.map(STATION_SLUGS,slug=><Station key={slug}
    station={this.props.stations[slug]}
    trains={this.props.trains[slug]}
    />
      )}
    </div>
  }
}

PathTimes.propTypes = {}
