import React from 'react'
import { HelloWorld } from '../components/components'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// setup enzyme
configure({ adapter: new Adapter() })

it('should render a paragraph text "Hello, world"', () => {
  const wrapper = shallow(<HelloWorld />)
  expect(wrapper.text()).toEqual('Hello, world');
})