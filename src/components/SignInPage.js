import React, { Component } from 'react'
import { connect } from 'cerebral/react'
import { signal } from 'cerebral/tags'

import googleLogo from '../google_g.svg'

export default connect(
  {
    login: signal`user.signInClicked`
  },
  class SignInPage extends Component {
    render() {
      const p = this.props
      return (
        <div className="signin-cover">
          <div>
            <button className="btn btn-google" type="button" onClick={p.login}>
              <img src={googleLogo} className="google-logo" alt="Google" />
              Sign In
            </button>
          </div>
        </div>
      )
    }
  }
)
