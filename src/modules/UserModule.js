import { state, props } from 'cerebral/tags'
import { set, when } from 'cerebral/operators'

import signIn from './actions/signIn.js'
import signOut from './actions/signOut.js'
import { startDataSub, stopDataSub } from './actions/listenForData.js'

export default module => {
  return {
    state: null,
    signals: {
      signInClicked: [signIn],
      signOutClicked: [signOut],
      loginComplete: [
        set(state`${module.path}`, props`user`),
        set(state`app.currentPage`, 'home'),
        startDataSub
      ],
      logoutComplete: [
        stopDataSub,
        set(state`${module.path}`, null),
        set(state`app.currentPage`, 'home')
      ]
    }
  }
}
