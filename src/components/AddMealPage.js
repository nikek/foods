import React, { Component } from 'react'
import { connect } from 'cerebral/react'
import { state, signal } from 'cerebral/tags'

import allFoods from './../utils/allFoods'

const StagedFood = ({ list }) => (
  <div>
    <ul>
      {list &&
        Object.keys(list).map((key, i) => (
          <li key={'StagedFood-' + i}>{allFoods[list[key].id].name}</li>
        ))}
    </ul>
  </div>
)

export default connect(
  {
    user: state`user`,
    recentMeals: state`intake.recent`,
    stagedFood: state`intake.stage`,
    addIntake: signal`intake.addIntake`,
    addMeal: signal`intake.addMeal`
  },
  class AddMealPage extends Component {
    render() {
      const p = this.props
      const selectFood = f => () => p.addIntake({ intake: f })
      const addMeal = () => p.addMeal()
      return (
        <div>
          <h2>Add Meal</h2>
          {p.error && <div className="alert alert-info">{p.error}</div>}
          <StagedFood list={p.stagedFood} />
          {p.stagedFood &&
          !!p.stagedFood.length && (
            <button
              className="btn btn-block btn-primary"
              type="button"
              onClick={addMeal}>
              Add Meal
            </button>
          )}
          <p>Recent foods</p>
          <ul>
            {p.recentMeals.map(rf => (
              <li key={'rf-' + rf.id}>
                <h5>{rf.type}</h5>

                {rf.foods.map(f => (
                  <button
                    key={rf.id + f.id}
                    className="btn btn-link"
                    onClick={selectFood(f)}>
                    {allFoods[f.id].name} >
                  </button>
                ))}
              </li>
            ))}
          </ul>
        </div>
      )
    }
  }
)
