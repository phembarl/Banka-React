import axios from '../config/axiosInstance';
import {
  GET_ERRORS, LOADING, SUCCESS, SET_CURRENT_USER,
} from './types';

export const loading = () => ({
  type: LOADING,
});
export const success = () => ({
  type: SUCCESS,
});
export const setCurrentUser = userInfo => ({
  type: SET_CURRENT_USER,
  payload: userInfo,
});

export const registerUser = (newUserDetails, history) => (dispatch) => {
  dispatch(loading());
  return axios.post('/auth/signup', newUserDetails)
    .then((response) => {
      history.push('/login');
      dispatch(success());
    })
    .catch(error => dispatch({
      type: GET_ERRORS,
      errors: error.response.data.errors,
    }));
};

export const loginUser = (userDetails, history) => (dispatch) => {
  dispatch(loading());
  return axios.post('/auth/signin', userDetails)
    .then((response) => {
      const user = response.data.data[0];
      sessionStorage.setItem('token', user.token);

      const userInfo = {
        userId: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        avatar: user.avatar,
      };
      history.push('/dashboard');

      dispatch(setCurrentUser(userInfo));

      dispatch(success());
    })
    .catch(error => dispatch({
      type: GET_ERRORS,
      errors: error.response.data.errors,
      message: error.response.data.error,
    }));
};
