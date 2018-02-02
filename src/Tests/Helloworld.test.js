import React from 'react'
import { HelloWorld } from '../components/components'
import { shallow, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import styledComponents from 'styled-components'
// setup enzyme
configure({ adapter: new Adapter() })

// test paragraph
it('should render a paragraph text "Hello, world"', () => {
  const wrapper = mount(pug`HelloWorld`) // shallow rendering
  expect(wrapper.find('p').text()).toEqual('Hello, world')
  expect(wrapper.find('button')).toBePresent()
})
