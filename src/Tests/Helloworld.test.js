import React from 'react'
import { HelloWorld } from '../components/components'
import { shallow, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import styledComponents from 'styled-components'
// setup enzyme
configure({ adapter: new Adapter() })

// test paragraph
it('should render a paragraph text "Hello, world"', () => {
  const wrapper = shallow(<HelloWorld />) // shallow rendering
  expect(wrapper.text()).toEqual('Hello, world')
})
// test button
it('should render a button from styled-components', () => {
  const Button = styledComponents.button
  const mounted = mount(<Button />) // fullDOM rendering
  expect(mounted.find(<Button />).exists()).toEqual(true)
})
