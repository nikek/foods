import React, { Component } from 'react'
import { connect } from 'cerebral/react'
import { state, signal } from 'cerebral/tags'

export default connect(
  {
    user: state`user`,
    addMealRouted: signal`app.addMealRouted`
  },
  class HomePage extends Component {
    render() {
      const p = this.props
      const addMealRouted = () => p.addMealRouted()
      return (
        <div>
          <h2>HOME</h2>
          <button className="btn btn-success btn-block" onClick={addMealRouted}>
            Add Meal
          </button>
        </div>
      )
    }
  }
)
