import Link from '../components/link'
import PropTypes from 'prop-types'
import React from 'react'
import _ from 'underscore'

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="Path">PATH</Link>
  </li>
      </ul>
    </nav>
  )
}

Nav.propTypes = {}
