import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Landing from '../src/components/Landing';

describe('About', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Landing />);
  });

  it('renders successfully', () => {
    expect(component).toBeDefined();
  });
});
