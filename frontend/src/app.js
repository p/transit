import React from 'react'
import Nav from './components/nav'
import moment from 'moment'

moment.locale('en', {
  week: { dow: 1 },
})

export default class AppBase extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    )
  }
}
