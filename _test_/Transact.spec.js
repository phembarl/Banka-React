import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Transact } from '../src/components/Transact';
import props from '../src/utils/testProps';

describe('About', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Transact {...props} />);
  });

  it('renders successfully', () => {
    expect(component).toBeDefined();
    component.setProps({
      errorMessage: 'This is an error',
      transactionDetails: {
        transactionType: 'debit',
        accountNumber: 12345678,
      },
    });
  });

  it('triggers a modal', () => {
    component.setProps({ errors: ['This is an error'] });
    component.instance().onCloseModal();
  });

  it('triggers a loader', () => {
    component.setProps({
      loading: true,
      loadingSuccess: true,
    });
  });

  it('submits a form', () => {
    component.setProps({
      loading: true,
      loadingSuccess: false,
    });
    component.instance().onSubmit({ preventDefault: jest.fn() });
    expect(props.transact).toHaveBeenCalledTimes(1);
  });

  it('should change value when changeValueHandler is called', () => {
    const event = {
      target: {
        value: 'This is to test for value change',
        name: 'amount',
      },
    };
    component.instance().changeValueHandler(event);
    const { amount } = component.state();
    expect(amount).toEqual(event.target.value);
  });
});
