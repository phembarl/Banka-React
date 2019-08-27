import { GET_ERRORS, LOADING } from '../actions/types';

const initialState = { loading: false, errors: [], errorMessage: '' };

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        errors: [],
        errorMessage: '',
        loading: true,
      };
    case GET_ERRORS:
      return {
        ...state,
        errors: action.errors,
        errorMessage: action.message,
        loading: false,
      };
    default:
      return state;
  }
}
