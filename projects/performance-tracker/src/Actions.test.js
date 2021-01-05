import {mount} from 'enzyme';
import App from './App';
import React from 'react';
describe("renders as expected", ()=>{
    let actions;
    beforeEach(()=>{
        actions=mount(<App/>).find("Actions");
    })

    it ("renders without crashing", ()=>{
        expect(actions.length).toBe(1);

    })
})