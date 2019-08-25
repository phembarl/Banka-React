import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import SignupForm from '../src/components/SignupForm';

describe('About', () => {
  let component;

  beforeEach(() => {
    component = shallow(<SignupForm />);
  });

  it('renders successfully', () => {
    expect(component).toBeDefined();
  });
});
