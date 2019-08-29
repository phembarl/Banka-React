const props = {
  decodeToken: jest.fn(),
  auth: {},
  userAccounts: jest.fn(),
  transactionHistory: jest.fn(),
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
  userAccount: {
    accountnumber: 12345678,
    createdon: '2019-06-05T20:22:46.085Z',
    owner: 1,
    type: 'current',
    status: 'active',
    balance: '32568678.00',
    loading: true,
  },
  errors: [],
  errorMessage: '',
  successMessage: '',
  transactionDetails: {},
  accountLoading: false,
  historyLoading: false,
  loading: false,
  loadingSuccess: true,
  newAccount: {},
  newAccountMessage: '',
  onOpenModal: jest.fn(),
  onCloseModal: jest.fn(),
  transact: jest.fn(),
  createAccount: jest.fn(),
};

export default props;