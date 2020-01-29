import _ from 'underscore'
import * as d from './deps'
import moment from 'moment'

export function data_age(struct) {
  if (struct) {
    let d = new Date().getTime() / 1000 - struct.updated_at
    return moment.duration(d, 'seconds').humanize() + ' ago'
  } else {
    return null
  }
}

export function unim(any) {
  if (any && any.toJS) {
    return any.toJS()
  } else {
    return any
  }
}

export var toim = d.toImmutable

export function imeh() {
  return toim({})
}

function wrap_updater(m) {
  return function _updater(state, delta) {
    return toim(m(unim(state), delta))
  }
}

export function define_store(initial_state, updaters) {
  let store = d.Store({
    getInitialState() {
      return toim(initial_state)
    },

    initialize() {
      each_kv(updaters, (event, handler) =>
        this.on(event, wrap_updater(handler)),
      )
    },
  })
  return store
}

export function befetch(url, options) {
  return fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw Error(`Problem fetching ${url}: ${response.statusText}`)
      }
      return response
    })
    .catch(error => {
      alert(error)
    })
    .then(response => response.json())
}

export function merge(one, two) {
  return Object.assign({}, one, two)
}

export function merge_subkey(left, subkey, right){
  if(!_.isArray(subkey)){
    subkey=[subkey]
  }
  let last=subkey.pop()
  let new_left=merge(left)
  let a_left=new_left,a_right=right
  _.each(subkey,item=>{
    a_left[item]=merge(a_left[item]||{})
    a_left=a_left[item]
  })
  a_left[last]=right
  return new_left
}

export function make_hash() {
  let i = 0
  let out = {}
  while (i < arguments.length) {
    let k = arguments[i++]
    let v = arguments[i++]
    out[k] = v
  }
  return out
}

export function each_kv(hash, cb) {
  return _.each(_.keys(hash), key => cb(key, hash[key]))
}

export function fetch(hash, key) {
  let v = hash[key]
  if (v === undefined) {
    throw new Error(
      `Hash value for ${key} was undefined: ${JSON.stringify(hash)}`,
    )
  }
  return v
}
