import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

describe('first', () => {
    it('first enzyme test', () => {
        const wrapper = shallow(<App/>)

        expect(wrapper.find('div').exists()).toEqual(true)
    })
})
