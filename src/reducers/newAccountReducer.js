import { NEW_ACCOUNT, LOADING } from '../actions/types';

const initialState = {
  newAccount: {},
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case NEW_ACCOUNT:
      return {
        ...state,
        newAccount: action.payload,
        message: action.msg,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
