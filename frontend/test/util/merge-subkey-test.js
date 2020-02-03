import * as d from '../../src/deps'
import _ from 'underscore'
import * as u from '../../src/util'
import { assert } from 'chai'

const ade=assert.deepEqual

describe('merge_subkey', function() {
  describe('one level down', () => {
    let left = { foo: 1 }
    
    it('merges when key is a string', () => {
      let result = u.merge_subkey(left, 'bar', { a: 'b' })
      ade(result, { foo: 1, bar: { a: 'b' } })
    })
    
    it('merges when key is an array', () => {
      let result = u.merge_subkey(left, ['bar'], { a: 'b' })
      ade(result, { foo: 1, bar: { a: 'b' } })
    })
  })
  
  describe('two levels down', () => {
    let left = { foo: 1 }
    
    it('merges', () => {
      let result = u.merge_subkey(left, ['bar', 'baz'], { a: 'b' })
      ade(result, { foo: 1, bar: { baz: { a: 'b' } } })
    })
  })
  
  describe('when value is not a hash', () => {
    let left = { foo: 1 }
    
    it('merges', () => {
      let result = u.merge_subkey(left, 'bar', [])
      ade(result, { foo: 1, bar:  [] })
    })
  })
})
