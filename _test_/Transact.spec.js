import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Transact } from '../src/components/Transact';

describe('About', () => {
  let component;

  const props = {
    auth: {},
    errors: [],
    errorMessage: '',
    transactionDetails: {},
    loading: false,
    loadingSuccess: true,
    newAccount: {},
    newAccountMessage: '',
  };

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
        loading: true,
        loadingSuccess: true,
      },
    });
  });

  // it('triggers a modal', () => {
  //   component.instance().onOpenModal();
  //   expe
  // });
});
