import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Dashboard } from '../src/components/Dashboard';

describe('About', () => {
  let component;

  const props = {
    decodeToken: jest.fn(),
    auth: {},
    userAccounts: jest.fn(),
    transactHistory: [
      {
        id: 3,
        createdon: '2019-07-31T21:46:27.253Z',
        type: 'credit',
        amount: 10000000.00,
        transactioncurrency: 'NGN',
        accountnumber: 98636932,
        cashier: 1,
        oldbalance: '0.00',
        newbalance: '10000000.00',
      },
      {
        id: 4,
        createdon: '2019-07-31T21:46:32.530Z',
        type: 'credit',
        amount: '10000000.00',
        transactioncurrency: 'NGN',
        accountnumber: 98636932,
        cashier: 1,
        oldbalance: '10000000.00',
        newbalance: '20000000.00',
      },
    ],
    errors: [],
    accountLoading: false,
    historyLoading: false,
    newAccount: {},
  };

  beforeEach(() => {
    component = shallow(<Dashboard {...props} />);
  });

  it('renders successfully', () => {
    expect(component).toBeDefined();
  });
});
