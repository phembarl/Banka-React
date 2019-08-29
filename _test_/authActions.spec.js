import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {
  GET_ERRORS, LOADING, SUCCESS, SET_CURRENT_USER,
} from '../src/actions/types';
import {
  signupResponse, signupErrorResponse, loginResponse, loginErrorResponse, userInfo,
} from '../src/utils/mockResponses';
import { registerUser, loginUser } from '../src/actions/authActions';
import axios from '../src/config/axiosInstance';

const mockStore = configureMockStore([thunk]);
let store = mockStore();

describe('Auth actions', () => {
  beforeEach(() => {
    moxios.install(axios);
    store.clearActions();
  });

  afterEach(() => moxios.uninstall(axios));
  it('Returns failure if signup was unsuccessful', (done) => {
    moxios.stubRequest('https://banka-andela-43.herokuapp.com/api/v1/auth/signup', {
      status: 400,
      response: signupErrorResponse,
    });
    const expectedActions = [
      {
        type: LOADING,
      },
      {
        type: GET_ERRORS,
        errors: signupErrorResponse.errors,
      },
    ];
    store = mockStore({});
    store.dispatch(registerUser())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
  it('Returns success if signup was successful', (done) => {
    moxios.stubRequest('https://banka-andela-43.herokuapp.com/api/v1/auth/signup', {
      status: 201,
      response: signupResponse,
    });
    const expectedActions = [
      {
        type: LOADING,
      },
      {
        type: SUCCESS,
      },
    ];
    store = mockStore({});
    const history = { push: jest.fn() };
    store.dispatch(registerUser(null, history)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('Returns failure if login was unsuccessful', (done) => {
    moxios.stubRequest('https://banka-andela-43.herokuapp.com/api/v1/auth/signin', {
      status: 400,
      response: loginErrorResponse,
    });
    const expectedActions = [
      {
        type: LOADING,
      },
      {
        type: GET_ERRORS,
        errors: loginErrorResponse.errors,
      },
    ];
    store = mockStore({});
    store.dispatch(loginUser())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('Returns su iccessf login was successful', (done) => {
    moxios.stubRequest('https://banka-andela-43.herokuapp.com/api/v1/auth/signin', {
      status: 200,
      response: loginResponse,
    });
    const expectedActions = [
      {
        type: LOADING,
      },
      {
        type: SET_CURRENT_USER,
        payload: userInfo,
      },
      {
        type: SUCCESS,
      },
    ];
    store = mockStore({});
    const history = { push: jest.fn() };
    store.dispatch(loginUser(null, history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
});
