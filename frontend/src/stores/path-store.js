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

function receive_station_realtime(state, { station_slug, payload }) {
  t.PathApiRealtimeResponse(payload)
  return u.merge_subkey(state, ['trains',station_slug], payload.upcomingTrains)
}
