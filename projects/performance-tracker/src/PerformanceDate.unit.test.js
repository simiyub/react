import { mount } from "enzyme";
import React from 'react';
import App from './App';

describe("renders as expected", ()=>{

    let performanceDate;
    beforeEach(()=>{
        performanceDate = mount(<App/>).find("PerformanceDate");
    });

    it ("renders without crashing", ()=>{
        expect(performanceDate.length).toBe(1);

    });
})