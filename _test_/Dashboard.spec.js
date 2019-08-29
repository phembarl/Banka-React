import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Dashboard } from '../src/components/Dashboard';
import props from '../src/utils/testProps';

describe('About', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Dashboard {...props} />);
  });

  it('renders successfully', () => {
    expect(component).toBeDefined();
    component.setProps({ accountLoading: true, historyLoading: true });
  });

  it('updates dashboard', () => {
    component.setProps({ userAccountnumber: 87654321 });
  });
});
