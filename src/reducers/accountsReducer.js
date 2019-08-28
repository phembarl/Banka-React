import { GET_ACCOUNTS, LOADING } from '../actions/types';

const initialState = {
  account: {},
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ACCOUNTS:
      return {
        ...state,
        account: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
