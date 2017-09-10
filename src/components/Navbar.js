import React, { Component } from 'react'
import { connect } from 'cerebral/react'
import { state, signal } from 'cerebral/tags'

export default connect(
  {
    currentPage: state`app.currentPage`,
    user: state`user`,
    userSettingsRouted: signal`app.userSettingsRouted`,
    homeRouted: signal`app.homeRouted`
  },
  class Navbar extends Component {
    render() {
      const p = this.props

      return (
        <nav className="navbar navbar-dark">
          <button
            className="btn btn-primary"
            type="button"
            onClick={p.homeRouted}>
            Home
          </button>
          <div className="navbar-brand">Foods</div>
          <img
            src={p.user.photoUrl}
            title={p.user.name}
            alt=""
            width="33"
            height="33"
            className="rounded-circle border border-light"
            onClick={p.userSettingsRouted}
          />
        </nav>
      )
    }
  }
)
