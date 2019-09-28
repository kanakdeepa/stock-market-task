import {
  SEARCH_PEERS,
  SHOW_COMPANY_DETAILS,
  SHOW_COMPANY_CHART,
} from '../actions/types';

const initialState = { peers: [], companyDetails: null, chart: [] };

const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PEERS:
      return {
        ...state,
        peers: action.payload,
      };

    case SHOW_COMPANY_DETAILS:
      return {
        ...state,
        companyDetails: action.payload,
      };

    case SHOW_COMPANY_CHART:
      return {
        ...state,
        chart: action.payload,
      };

    default:
      return state;
  }
};

export default stocksReducer;
