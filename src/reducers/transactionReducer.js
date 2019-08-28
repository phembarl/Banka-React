import { TRANSACT, LOADING } from '../actions/types';

const initialState = {
  transactionDetails: {},
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case TRANSACT:
      return {
        ...state,
        transactionDetails: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
