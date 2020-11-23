import React from 'react';
import  {useAuthenticator} from '../useAuthenticator';
import {testHook} from './TestHook';
import { shallow } from 'enzyme';

let auth;

beforeEach(()=>{
    testHook(()=>{
        auth = useAuthenticator;
    })
});
describe ('authenticator',() =>{
    it("should accept user input for username and password", ()=>{

        let mountedAuthenticator = shallow(<useAuthenticator/>);
    });
});