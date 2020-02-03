import * as d from './deps'

let t = d.tc

export const { list } = t

export const PathApiStation = t.struct({
  station: t.String,
  id: t.String,
  coordinates: t.struct({
    latitude: t.Number,
    longitude: t.Number,
  }),
  //platforms:t.list(),
  //entrances:t.list(),
  timezone: t.String,
})

export const PathApiStationsResponse = t.struct({
  stations: t.list(PathApiStation),
})

export const PathApiTrain = t.struct({
  lineName: t.String,
  lineColors: t.list(t.String),
  projectedArrival: t.String,
  lastUpdated: t.String,
  status: t.String,
  headsign: t.String,
  routeDisplayName: t.String,
  direction: t.String,
})

export const PathApiRealtimeResponse = t.struct({
  upcomingTrains: t.list(PathApiTrain),
})
