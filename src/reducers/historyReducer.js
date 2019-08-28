import { GET_HISTORY, LOADING } from '../actions/types';

const initialState = {
  transactionHistory: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_HISTORY:
      return {
        ...state,
        transactionHistory: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
