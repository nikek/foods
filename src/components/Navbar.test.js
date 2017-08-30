import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import { StateContainer } from 'cerebral/react'
import Navbar from './Navbar'

it('renders without crashing', () => {
  const state = {
    user: { name: 'Sherlock', photoUrl: 'http://path-to-img.url' }
  }
  const wrapper = mount(
    <StateContainer state={state}>
      <Navbar />
    </StateContainer>
  )

  expect(wrapper.find('img').length).toBe(1)
  expect(toJson(wrapper)).toMatchSnapshot()
})
