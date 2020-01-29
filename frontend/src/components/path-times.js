import * as f from '../format'
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

let hm_formatter = d.DateTimeFormatter.ofPattern('H:mm').withLocale(
  d.JodaLocale.US,
)
//let m_formatter = d.DateTimeFormatter.ofPattern('m').withLocale(d.JodaLocale.US)

function Train(props) {
  let delta = d.Duration.between(d.LocalDateTime.now(), props.train.arrival)

  return (
    <p>
      {props.train.lineName}
      {': '}
      {props.train.arrival.format(hm_formatter)} {delta.toMinutes()} min{' '}
      {f.format_train_status(props.train.status)}
    </p>
  )
}

function Station (props){
    //alert(JSON.stringify(this.props.trains))
    if (props.trains === undefined) {
      return <p>Loading...</p>
    }

    //alert(JSON.stringify(this.props.trains))
    t.list(t.PathApiTrain)(props.trains)
    return (
      <div>
        <h2>{props.station.name}</h2>
        <div>
          Next train:{' '}
          {_.map(props.trains, train => (
            <Train
              train={train}
              key={`${train.lineName}--${train.projectedArrival}`}
            />
          ))}
        </div>
      </div>
    )
  }

export default class PathTimes extends React.Component {
  render() {
    return (
      <div>
        {_.map(STATION_SLUGS, slug => (
          <Station
            key={slug}
            station={this.props.stations[slug]}
            trains={this.props.trains[slug]}
          />
        ))}
      </div>
    )
  }
}

PathTimes.propTypes = {}
