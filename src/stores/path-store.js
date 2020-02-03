import * as d from '../deps'
import * as t from '../types'
import _ from 'underscore'
import * as u from '../util'

export default u.define_store(
  {},
  {
    receive_stations,
    receive_station_realtime,
  },
)

function receive_stations(state, payload) {
  t.PathApiStationsResponse(payload)
  let stations = {}
  _.each(payload.stations, station => {
    t.PathApiStation(station)
    stations[station.station.toLowerCase()] = station
  })
  return u.merge(state, { stations })
}

//let iso8601_pattern='yyyy-m-dTHH:mm:ssZ'
//let iso8601_formatter = d.DateTimeFormatter.ofPattern(iso8601_pattern).withLocale(d.JodaLocale.US)

function receive_station_realtime(state, { station_slug, payload }) {
  // if a station is closed, the api response is an empty hash and it
  // does not have the upcomingTrains key at all.
  // here we treat empty api response and api response with upcomingTrains
  // set to an empty array the same.
  
  if (payload.upcomingTrains){
    t.PathApiRealtimeResponse(payload)
  }else if(_.isEmpty(payload)){
    console.log(`Received empty response for ${station_slug}`)
    payload={upcomingTrains:[]}
  }else{
    throw new Exception(`Weird payload received for ${station_slug}: ${payload}`)
  }
  
  payload = payload.upcomingTrains

  _.each(payload, train => {
    let utcTimestamp = d.Instant.parse(train.projectedArrival)
    train.arrival = d.LocalDateTime.ofInstant(utcTimestamp)
  })

  //payload.arrival=d.ZonedDateTime.parse(payload.projectedArrival)
  return u.merge_subkey(state, ['trains', station_slug], payload)
}
