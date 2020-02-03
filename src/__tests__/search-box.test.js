import React from 'react'

import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'

import SearchBox from '../components/search-box/search-box.component'

describe('SearchBox', () => {
  it('should render without crashing', () => {
    const mockProps = {
      placeholder: 'Type here', 
      handleChangeInput: jest.fn(),
    }
    const wrapper = shallow(<SearchBox {...mockProps} />)

    expect(toJson(wrapper)).toMatchSnapshot()
  })
})