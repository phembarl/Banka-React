import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import LoginForm from '../src/components/LoginForm';

describe('About', () => {
  let component;

  beforeEach(() => {
    component = shallow(<LoginForm />);
  });

  it('renders successfully', () => {
    expect(component).toBeDefined();
  });
});
