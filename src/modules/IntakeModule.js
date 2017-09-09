import { state, props } from 'cerebral/tags'
import { set, when, push } from 'cerebral/operators'

function createMealFromStage({ state, props }) {
  props.meal = {
    id: new Date().getTime(),
    datetime: new Date().getTime(),
    foods: state.get('intake.stage')
  }
}

export default module => {
  return {
    state: {
      error: '',
      stage: [],
      recent: [
        {
          id: 321,
          datetime: 123456,
          type: 'Lunch',
          foods: [
            {
              id: 123,
              amount: {
                value: 300,
                unit: 'ml'
              }
            },
            {
              id: 0,
              amount: {
                value: 200,
                unit: 'ml'
              }
            }
          ]
        },
        {
          id: 432,
          datetime: 123456,
          type: 'Snack',
          foods: [
            {
              id: 2,
              amount: {
                value: 2,
                unit: 'dl'
              }
            },
            {
              id: 4,
              amount: {
                value: 120,
                unit: 'g'
              }
            }
          ]
        }
      ]
    },
    signals: {
      addIntake: [push(state`intake.stage`, props`intake`)],
      addMeal: [
        when(state`intake.stage.length`),
        {
          true: [
            createMealFromStage,
            push(state`intake.recent`, props`meal`),
            set(state`intake.stage`, [])
          ],
          false: [set(state`error`, 'No food in meal')]
        }
      ]
    }
  }
}
