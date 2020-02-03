import React from 'react';

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import nock from 'nock'

import App from '../App';

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it('should renders without crashing', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should filter monters correctly', () => {
    const filteredMonsters = [
      { 
        id: 2,
        name: 'Michael',
        email: 'mike@example.com'
      }
    ]

    wrapper.setState({
      monsters: [
        { 
          id: 2,
          name: 'Michael',
          email: 'mike@example.com'
        }
      ],
      searchFeild: 'Michael'
    })

    expect(wrapper.instance().filteredMonsters()).toEqual(filteredMonsters)
  })

  it('should not filter any monters', () => {
    wrapper.setState({
      monsters: [
        { 
          id: 2,
          name: 'Michael',
          email: 'mike@example.com'
        }
      ],
      searchFeild: 'mike'
    })

    expect(wrapper.instance().filteredMonsters()).toEqual([])
  })

  it('should be fetching data successfull with nock API', () => {
    const mockMonsters = [
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
    const nockAPI = nock('https://randommonsters.me')
    .get('/monsters/')
    .reply(200, {
      results: mockMonsters,
    }, { 
      'Access-Control-Allow-Origin': '*', 
      'Content-type': 'application/json' 
    })
    
    return fetch("https://randommonsters.me/monsters/")
    .then(res => res.json())
    .then(data => {
      wrapper.setState({monsters: data.results})
      expect(wrapper.instance().state['monsters']).toEqual(mockMonsters)
      nockAPI.done()
    })
  })

  it('should be fetching data failure', () => {
    nock('https://randommonsters.me')
    .get('/monsters/')
    .reply(500, { results: { error: 'Fetching data failure' }}, { 
      'Access-Control-Allow-Origin': '*', 
      'Content-type': 'application/json' 
    })
    
    return fetch("https://randommonsters.me/monsters/")
    .then(res => res.json())
    .then(res => {
      expect(res.results.error).toBe('Fetching data failure')
    })
    .catch(err => console.log(err))
  })
})

