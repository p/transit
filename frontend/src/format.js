import _ from 'underscore'

export function format_train_status(status){
  let bits = status.split('_')
  bits=_.map(bits,bit=>
    bit[0]+bit.slice(1).toLowerCase())
  return bits.join(' ')
}
