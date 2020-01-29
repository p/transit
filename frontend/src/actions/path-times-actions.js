import * as u from '../util'
import reactor from '../reactor'
import _ from 'underscore'

const STATIONS=[
'thirty_third_street','world_trade_center','journal_square']

const PATH_API_URL='https://path.api.razza.dev/v1'

export function fetch_path_times() {
        fetch(`${PATH_API_URL}/stations`)
        .then(resp=>resp.json())
    .then(payload=>reactor.dispatch('receive_stations',payload))
    
    _.each(STATIONS,station=>{
        fetch(`${PATH_API_URL}/stations/${station}/realtime`)
        .then(resp=>resp.json())
        .then(payload=>reactor.dispatch('receive_station_realtime',payload))
    })
    }
