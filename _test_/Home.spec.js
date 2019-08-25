import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Home from '../src/components/Home';

describe('About', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Home />);
  });

  it('renders successfully', () => {
    expect(component).toBeDefined();
  });

  it('renders a div tag', () => {
    expect(component.find('div').length).toBe(10);
  });

  it('renders a nav tag', () => {
    expect(component.find('nav').length).toBe(1);
  });

  it('renders an a tag', () => {
    expect(component.find('a').length).toBe(2);
  });

  it('renders an h3 tag', () => {
    expect(component.find('h3').length).toBe(1);
  });

  it('renders three Link tags', () => {
    expect(component.find('Link').length).toBe(3);
  });

  it('renders two h2 tags', () => {
    expect(component.find('h2').length).toBe(2);
  });
});
