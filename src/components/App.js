import React, { Component } from 'react'
import { connect } from 'cerebral/react'
import { state, signal } from 'cerebral/tags'

// Components
import Navbar from './Navbar'

// Pages
import SignInPage from './SignInPage'
import HomePage from './HomePage'
import UserSettingsPage from './UserSettingsPage'

const pageMapping = {
  home: HomePage,
  userSettings: UserSettingsPage
}

export default connect(
  {
    user: state`user`,
    currentPage: state`app.currentPage`,
    addMealRouted: signal`app.addMealRouted`
  },
  class App extends Component {
    render() {
      const p = this.props

      // Any logged in page (currentPage) or SignInPage
      const Page = p.user ? pageMapping[p.currentPage] : SignInPage

      return (
        <div className="content">
          {p.user && <Navbar />}
          <Page />
        </div>
      )
    }
  }
)
