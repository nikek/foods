import React, { Component } from 'react'
import { connect } from 'cerebral/react'
import { state, signal } from 'cerebral/tags'

export default connect(
  {
    user: state`user`,
    logout: signal`user.signOutClicked`
  },
  class UserSettingsPage extends Component {
    render() {
      const p = this.props
      return (
        <div>
          <button
            className="btn btn-default btn-block"
            type="button"
            onClick={p.logout}>
            Sign Out
          </button>
        </div>
      )
    }
  }
)
