import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { TransactHistory } from '../src/components/History';
import props from '../src/utils/testProps';

describe('About', () => {
  let component;

  beforeEach(() => {
    component = shallow(<TransactHistory {...props} />);
    component.setProps({ accountLoading: true, historyLoading: true });
  });

  it('renders successfully', () => {
    expect(component).toBeDefined();
  });
});
