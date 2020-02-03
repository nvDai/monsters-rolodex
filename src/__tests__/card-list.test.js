import React from 'react'

import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'

import CardList from '../components/card-list/card-list.component'

describe('CardList', () => {
  it('should render without crashing', () => {
    const mockProps = {
      monsters: [
        {
          id: '1',
          name: 'Michael',
          email: 'michael@gmail.com'
        },
        {
          id: '2',
          name: 'Michael 2',
          email: 'michael2@gmail.com'
        }
      ]
    }
    const wrapper = shallow(<CardList {...mockProps} />)

    expect(toJson(wrapper)).toMatchSnapshot()
  })
})