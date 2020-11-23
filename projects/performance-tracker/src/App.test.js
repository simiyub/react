import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {mount, shallow} from 'enzyme';

describe("Tests for app to check it renders all required modules", ()=>{

  it ("should render App without crashing", ()=>{
    shallow(<App/>);
  })
  it ("should render Objective without crashing", ()=>{
    const app = mount(<App/>);
    const objective = app.find("Objective");
    expect(objective.length).toBe(1);
  })
})

