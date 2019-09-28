import axios from 'axios';

const apiTokenSandbox = 'Tpk_a0b1fb97dc4447eb9c128aebc72259d4';
const apiToken = 'pk_d02a4f2194df4de086f1ddbc3e582e62';
const baseUrlSandbox = 'https://sandbox.iexapis.com/v1';
const baseUrl = 'https://cloud.iexapis.com/v1';

/**
 * Get peer group symbols for the company
 * @param {*} quote Company Symbol
 */
export const getPeers = quote => {
  return axios.get(
    `${baseUrlSandbox}/stock/${quote}/peers?token=${apiTokenSandbox}`,
  );
};

/**
 * Get company details for a symbol
 * @param {*} quote Company Symbol
 */
export const getCompanyDetails = quote => {
  return axios.get(`${baseUrl}/stock/${quote}/company?token=${apiToken}`);
};

/**
 * Get chart for the company. Default : 1 month
 * @param {*} quote Company symbol
 * @param {*} duration 1m, 3m or 6m
 */
export const getChart = (quote, duration = '1m') => {
  return axios.get(
    `${baseUrl}/stock/${quote}/chart/${duration}?token=${apiToken}`,
  );
};
