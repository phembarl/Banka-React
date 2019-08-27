import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Dashboard from '../src/components/Dashboard';

describe('About', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Dashboard />);
  });

  it('renders successfully', () => {
    expect(component).toBeDefined();
  });
});
