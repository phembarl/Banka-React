import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Private from '../src/hoc/Private';

describe('About', () => {
  let component;


  const props = {
    token: 'fmkkjnklkjsndkflkjf',
  };

  beforeEach(() => {
    component = shallow(<Private {...props} />);
  });

  it('renders successfully', () => {
    expect(component).toBeDefined();
  });
});
