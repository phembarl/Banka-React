import React from 'react';
import expect from 'expect';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/App';

Enzyme.configure({ adapter: new Adapter() });
describe('App', () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it('renders successfully', () => {
    expect(component).toBeDefined();
  });

  it('renders a Switch component', () => {
    expect(component.find('Switch').length).toBe(1);
  });
});
