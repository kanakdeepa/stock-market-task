import {
  SEARCH_PEERS,
  SHOW_COMPANY_DETAILS,
  SHOW_COMPANY_CHART,
} from './types';
import {
  getPeers,
  getCompanyDetails,
  getChart,
} from '../services/stockService';

export const searchPeers = quote => dispatch => {
  // API call
  getPeers(quote)
    .then(result => {
      dispatch({
        type: SEARCH_PEERS,
        payload: result.data,
      });
    })
    .catch(err => {
      dispatch({
        type: SEARCH_PEERS,
        payload: 'NOT_FOUND',
      });
    });
};

export const showCompanyDetails = quote => dispatch => {
  getCompanyDetails(quote).then(result => {
    dispatch({
      type: SHOW_COMPANY_DETAILS,
      payload: result.data,
    });
  });
};

export const showChart = (quote, duration) => dispatch => {
  getChart(quote, duration)
    .then(result => {
      dispatch({
        type: SHOW_COMPANY_CHART,
        payload: result.data,
      });
    })
    .catch(err => {
      dispatch({
        type: SHOW_COMPANY_CHART,
        payload: 'NOT_FOUND',
      });
    });
};
