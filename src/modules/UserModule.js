import { state, props } from 'cerebral/tags'
import { set, when } from 'cerebral/operators'

import signIn from './actions/signIn.js'
import signOut from './actions/signOut.js'
import listenForData from './actions/listenForData.js'

export default module => {
  return {
    state: null,
    signals: {
      signInClicked: [signIn, set(state`app.currentPage`, 'home')],
      signOutClicked: [signOut],
      setUser: [
        set(state`${module.path}`, props`user`),
        when(props`user`),
        {
          true: [listenForData],
          false: []
        }
      ]
    }
  }
}
