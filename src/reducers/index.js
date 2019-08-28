import { combineReducers } from 'redux';
import authReducer from './authReducer';
import authErrorReducer from './authErrorReducer';
import historyReducer from './historyReducer';
import accountsReducer from './accountsReducer';
import newAccountReducer from './newAccountReducer';
import transactionReducer from './transactionReducer';
import success from './success';

export default combineReducers({
  auth: authReducer,
  errors: authErrorReducer,
  transactionHistory: historyReducer,
  transactionDetails: transactionReducer,
  userAccount: accountsReducer,
  newAccount: newAccountReducer,
  success,
});
