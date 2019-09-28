import { SEARCH_PEERS } from './types';
import { getPeers, getCompanyDetails } from '../services/stockService';

export const searchPeers = quote => dispatch => {
  // API call
  getPeers(quote).then(result => {
    dispatch({
      type: SEARCH_PEERS,
      payload: result.data,
    });
  });
};
