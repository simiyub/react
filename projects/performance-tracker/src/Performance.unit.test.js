import { mount, shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe("renders as expected", ()=>{

    let performance;

    beforeEach( ()=>{
        performance=mount(<App/>).find("Performance");
    })

    it("renders without crashing", ()=>{
        expect(performance.length).toBe(1);
    })
})