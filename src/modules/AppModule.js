import { state, props } from 'cerebral/tags'
import { set } from 'cerebral/operators'

export default module => {
  return {
    state: {
      currentPage: 'home'
    },
    signals: {
      homeRouted: [set(state`app.currentPage`, 'home')],
      addMealRouted: [set(state`app.currentPage`, 'addMeal')],
      userSettingsRouted: [set(state`app.currentPage`, 'userSettings')],
      setNumber: [set(state`app.number`, props`num`)]
    }
  }
}
