import { combineReducers } from 'redux';
import authReducer from './authReducer';
import authErrorReducer from './authErrorReducer';
import success from './success';

export default combineReducers({
  auth: authReducer,
  errors: authErrorReducer,
  success,
});
