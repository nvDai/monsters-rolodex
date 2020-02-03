import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Card from '../components/card/card.component'

describe('Card', () => {
  let mockProps, wrapper

  beforeEach(() => {
    mockProps = {
      monster: {
        id: '1',
        name: 'Michael',
        email: 'michael@gmail.com'
      }
    }
    
    wrapper = shallow(<Card { ...mockProps } />)
  });
  
  it('should render without crashing', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should have an id for a monster', () => {
    expect(mockProps.monster.id).toBeTruthy()
  })
})