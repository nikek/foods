import React, { Component } from 'react'
import { connect } from 'cerebral/react'
import { state, signal } from 'cerebral/tags'

export default connect(
  {
    user: state`user`,
    addMealRouter: signal`app.addMealRouted`
  },
  class HomePage extends Component {
    render() {
      const p = this.props
      return <div>HOME {p.user.name}</div>
    }
  }
)
