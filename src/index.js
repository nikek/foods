import 'dotenv/config'
import React from 'react'
import { render } from 'react-dom'
import { Controller } from 'cerebral'
import { Container } from 'cerebral/react'
import Devtools from 'cerebral/devtools'
import firebase from 'firebase'

import AppModule from './modules/AppModule.js'
import UserModule from './modules/UserModule.js'
import IntakeModule from './modules/IntakeModule.js'
import setupAuthListener from './setupAuthListener'

import App from './components/App.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import './google_g.svg'

import registerServiceWorker from './registerServiceWorker'
registerServiceWorker()

const projId = process.env.REACT_APP_FIR_PROJECT_ID
const FIRConfig = {
  apiKey: process.env.REACT_APP_FIR_APIKEY,
  authDomain: `${projId}.firebaseapp.com`,
  databaseURL: `https://${projId}.firebaseio.com`,
  projectId: `${projId}`,
  storageBucket: `${projId}.appspot.com`,
  messagingSenderId: process.env.REACT_APP_FIR_MESSAGING_SENDER_ID
}
// Initialize Firebase
firebase.initializeApp(FIRConfig)

const controller = Controller({
  devtools:
    process.env.NODE_ENV === 'production'
      ? null
      : Devtools({
          // Time travel
          storeMutations: true,
          // Warnings on mutating outside "state" API
          preventExternalMutations: true,
          // Warnings when passing in non-serializable data to signals and state tree
          enforceSerializable: true,
          // Warnings when strict render path usage is wrong
          verifyStrictRender: true,
          // Throw error when overwriting existing input property
          preventInputPropReplacement: false,
          // Shows a warning when you have components with number of state dependencies
          // or signals above the set number
          bigComponentsWarning: { state: 5, signals: 5 },
          // Connect to Electron debugger (external debugger). It will fall back to
          // chrome extension if unable to connect
          host: 'localhost:8585',
          // Will reset debugger to currently focused application
          multipleApps: true
        }),
  providers: [c => (c.firebase = firebase) && c],
  modules: {
    app: AppModule,
    user: UserModule,
    intake: IntakeModule
  }
})

setupAuthListener(
  firebase,
  controller.getSignal('user.loginComplete'),
  controller.getSignal('user.logoutComplete')
)

render(
  <Container controller={controller}>
    <App />
  </Container>,
  document.querySelector('#root')
)
