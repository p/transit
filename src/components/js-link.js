import * as d from '../deps'
import React from 'react'

export default function JsLink(props) {
  return (
    <a href="#" onClick={d.preventDefaultWrapper(props.onClick)}>
      {props.children}
    </a>
  )
}
