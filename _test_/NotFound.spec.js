import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import NotFound from '../src/components/NotFound';

describe('About', () => {
  let component;

  beforeEach(() => {
    component = shallow(<NotFound />);
  });

  it('renders successfully', () => {
    expect(component).toBeDefined();
  });
});
