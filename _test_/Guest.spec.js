import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Guest from '../src/hoc/Guest';

describe('About', () => {
  let component;

  const props = {
    token: 'fmkkjnklkjsndkflkjf',
  };

  beforeEach(() => {
    component = shallow(<Guest {...props} />);
  });

  it('renders successfully', () => {
    expect(component).toBeDefined();
  });
});
