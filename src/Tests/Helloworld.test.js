import React from 'react'
import { HelloWorld } from '../components/components'
import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// setup enzyme
configure({ adapter: new Adapter() })

it('should render a paragraph text "Hello, World"', () => {
  const paragraph = 'Hello, world'
  const wrapper = shallow(<HelloWorld />)
  expect(wrapper.find('p').length).toEqual(paragraph.length) // 12
})