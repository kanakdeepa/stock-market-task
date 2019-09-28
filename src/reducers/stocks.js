import { SEARCH_PEERS } from '../actions/types';

const stockReducer = (state = { peers: [] }, action) => {
  switch (action.type) {
    case SEARCH_PEERS:
      return {
        ...state,
        peers: action.payload,
      };
    default:
      return state;
  }
};

export default stockReducer;
