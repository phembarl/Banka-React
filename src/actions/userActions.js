import axios from '../config/axiosInstance';
import {
  GET_ERRORS, LOADING, SUCCESS, GET_ACCOUNTS, GET_HISTORY, NEW_ACCOUNT, TRANSACT,
} from './types';

export const loading = () => ({
  type: LOADING,
});
export const success = () => ({
  type: SUCCESS,
});

export const getAccounts = accounts => ({
  type: GET_ACCOUNTS,
  payload: accounts,
});

export const getHistory = transactHistory => ({
  type: GET_HISTORY,
  payload: transactHistory,
});

export const newAccount = newAccountData => ({
  type: NEW_ACCOUNT,
  payload: newAccountData,
  msg: 'Account created successfully',
});

export const transaction = transactionInfo => ({
  type: TRANSACT,
  payload: transactionInfo,
});

export const userAccounts = email => (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(loading());
  return axios.get(`/user/${email}/accounts`, {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
  })
    .then((response) => {
      const accounts = response.data.data[0];

      if (!accounts) {
        window.location.href = '/create-account';
      }

      dispatch(getAccounts(accounts));

      dispatch(success());
    })
    .catch(error => dispatch({
      type: GET_ERRORS,
      errors: error.response.data.errors,
      message: error.response.data.error,
    }));
};

export const transactionHistory = accountNumber => (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(loading());
  return axios.get(`/accounts/${accountNumber}/transactions`, {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
  })
    .then((response) => {
      const transactHistory = response.data.data;

      dispatch(getHistory(transactHistory));

      dispatch(success());
    })
    .catch(error => dispatch({
      type: GET_ERRORS,
      errors: error.response.data.errors,
      message: error.response.data.error,
    }));
};

export const createAccount = accountType => (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(loading());
  return axios.post('/accounts', accountType, {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
  })
    .then((response) => {
      const newAccountData = response.data.data[0];

      dispatch(newAccount(newAccountData));

      dispatch(success());
    })
    .catch(error => dispatch({
      type: GET_ERRORS,
      errors: error.response.data.errors,
      message: error.response.data.error,
    }));
};

export const transact = (accountNumber, transactionType, transactionData) => (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(loading());
  return axios.post(`/transactions/${accountNumber}/${transactionType}`, transactionData, {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
  })
    .then((response) => {
      const transactionDetails = response.data.data[0];
      console.log(response);

      dispatch(transaction(transactionDetails));

      dispatch(success());
    })
    .catch(error => dispatch({
      type: GET_ERRORS,
      errors: error.response.data.errors,
      message: error.response.data.error,
    }));
};
