import React, { Component } from 'react'
import { connect } from 'cerebral/react'
import { signal } from 'cerebral/tags'

export default connect(
  {
    login: signal`user.signInClicked`
  },
  class SignInPage extends Component {
    render() {
      const p = this.props
      return (
        <div className="btn-group">
          <button className="dropdown-item" type="button" onClick={p.login}>
            Sign In
          </button>
        </div>
      )
    }
  }
)
