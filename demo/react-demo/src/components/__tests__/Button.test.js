import React from 'react';
import { render } from '@testing-library/react';
import Button from '../Button';
import { shallow, mount } from 'enzyme';

describe("tests for button",()=>{
    let props;
    let mountedButton;
    beforeEach(()=>{


        props = {
            name:"Submit"
        }
        mountedButton = shallow(<Button {...props}/>);


    })
    it ("can receive values from props",()=>{
        const buttonName = mountedButton.find('.submit');
        expect(buttonName.text()).toEqual("Submit");
    })
})