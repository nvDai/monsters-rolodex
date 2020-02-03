import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Card from '../components/card/card.component'

describe('Card', () => {
  it('should render without crashing', () => {
    const mockProps = {
      monster: {
        id: '1',
        name: 'Michael',
        email: 'michael@gmail.com'
      }
    }
    const wrapper = shallow(<Card { ...mockProps } />)

    expect(mockProps.monster.id).toBeTruthy()
    expect(mockProps.monster.name).toBeTruthy()
    expect(mockProps.monster.email).toBeTruthy()
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})