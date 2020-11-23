import React from 'react';
import { render } from '@testing-library/react';
import Objective from '../objective';
import {mount, shallow} from 'enzyme';
import { testHook } from './testHook';
import {useObjectiveState} from '../useObjectiveState';
let wrapper;
let stateUtil;

beforeEach(()=>{
    wrapper = shallow(<Objective/>);

    testHook(()=>{

        stateUtil = useObjectiveState();
    })

})
describe("Objective tests", ()=>{

    it("matchesthe snapshot", ()=>{
        expect(wrapper.html()).toMatchSnapshot();
    })
    it("renders without crashing",()=>{
        shallow(<Objective/>);
    })
    it("has required input", ()=>{
        expect(wrapper.find(".objective").length).toBe(1);
        expect(wrapper.find(".startdate").length).toBe(1);
        expect(wrapper.find(".enddate").length).toBe(1);
        expect(wrapper.find(".owner").length).toBe(1);
        expect(wrapper.find(".status").length).toBe(1);
        expect(wrapper.find(".logo").length).toBe(1);
    })
    it("has required buttons", ()=>{
        expect(wrapper.find(".submit").length).toBe(1);
        expect(wrapper.find(".reset").length).toBe(1);
    })
    
    it("calls a function passed to it when clicked",()=>{
        const mockCallBack = jest.fn();
        const mountedObjectiveWithCallback = shallow(<Objective handleClick = {mockCallBack}/>);
        mountedObjectiveWithCallback.find(".submit").simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    })

    it("calls setState with the value of objective provided", ()=>{
        let myFirstObjective="myfirst objective";
        const setState = jest.fn();
        const useStateSpy = jest.spyOn(React, 'useState')
        useStateSpy.mockImplementation((init)=>[init, setState]);
        wrapper.find('objective').onChange();
        expect(setState).toHaveBeenCalledWith(myFirstObjective);

        // const mountedObjective = mount(<Objective/>);
        // let myFirstObjective="myfirst objective";
        // //const mockCallBack = jest.fn(mountedObjective.handleValueChange);
        // const mockEvent = {target:{name:"objective", value:myFirstObjective}};
        // //expect(mountedObjective.find('input[type="password"'))
        // //mockCallBack(mockEvent);
        // const mockCallBack=jest.fn( mountedObjective.handleValueChange);
        // mockCallBack(mockEvent);
        // expect(mountedObjective.state.objective.toEqual(myFirstObjective))
    })

    it("calls axios.get in #componentDidMount", ()=>{
        return wrapper.instance().componentDidMount().then( ()=>{
            expect(axios.get).toHaveBeenCalled();
        })
    })

})