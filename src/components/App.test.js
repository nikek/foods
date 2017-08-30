import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { StateContainer } from 'cerebral/react'

it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(
    <StateContainer>
      <App />
    </StateContainer>,
    div
  )
})
