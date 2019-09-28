import React, { useEffect, useState } from 'react';
import Page from 'components/Page';
import { Table, Row, Col, Button, Card, CardBody } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { showCompanyDetails, showChart } from '../actions';
import { withRouter } from 'react-router';
import StockLineChart from '../components/StockLineChart';

// import { Line } from 'react-chartjs-2';

// const genLineData = (moreData = {}, moreData2 = {}) => {
//   return {
//     labels: MONTHS,
//     datasets: [
//       {
//         label: 'Dataset 1',
//         backgroundColor: getColor('primary'),
//         borderColor: getColor('primary'),
//         borderWidth: 1,
//         data: [
//           randomNum(),
//           randomNum(),
//           randomNum(),
//           randomNum(),
//           randomNum(),
//           randomNum(),
//           randomNum(),
//         ],
//         ...moreData,
//       },
//       {
//         label: 'Dataset 2',
//         backgroundColor: getColor('secondary'),
//         borderColor: getColor('secondary'),
//         borderWidth: 1,
//         data: [
//           randomNum(),
//           randomNum(),
//           randomNum(),
//           randomNum(),
//           randomNum(),
//           randomNum(),
//           randomNum(),
//         ],
//         ...moreData2,
//       },
//     ],
//   };
// };

const StockDetails = props => {
  const companyDetails = useSelector(state => state.stockState.companyDetails);
  const chartData = useSelector(state => state.stockState.chart);
  const [duration, setDuration] = useState('1m');
  const [chartOptions, setChartOptions] = useState({
    open: true,
    close: true,
    high: false,
    low: false,
    volume: false,
    change: false,
  });

  const dispatch = useDispatch();

  /* Passing in an empty array [] of inputs tells React that your effect doesn't depend on any values from the component, so that effect would run only on mount and clean up on unmount; it won't run on updates. */
  useEffect(() => {
    const stockQuote = props.match.params.quote;
    dispatch(showCompanyDetails(stockQuote));
    dispatch(showChart(stockQuote));
  }, []);

  const durationChangeHandler = duration => {
    // Dispatch action to get chart data
    const stockQuote = props.match.params.quote;
    dispatch(showChart(stockQuote, duration));
    setDuration(duration);
  };

  const allStyles = {
    spanStyle: {
      color: 'grey',
      fontSize: 12,
      fontWeight: 600,
      margin: '0px 8px',
      textTransform: 'capitalize',
    },
  };
  const checkboxHandler = opt => {
    const chrtOpts = { ...chartOptions };
    chrtOpts[opt] = !chrtOpts[opt];
    setChartOptions(chrtOpts);
  };
  return (
    <Page title={companyDetails && companyDetails.companyName}>
      <Card style={{ marginBottom: 15 }}>
        <CardBody>{companyDetails && companyDetails.description}</CardBody>
      </Card>

      {chartData && chartData === 'NOT_FOUND' ? (
        <div
          style={{
            background: 'orange',
            padding: '10px 15px',
            borderRadius: 3,
          }}
        >
          Data Not Found
        </div>
      ) : chartData.length ? (
        <>
          <Row>
            <Col xs={12} sm={6}>
              <Button
                outline={!(duration === '1m')}
                onClick={() => durationChangeHandler('1m')}
              >
                1 Month
              </Button>{' '}
              <Button
                outline={!(duration === '3m')}
                onClick={() => durationChangeHandler('3m')}
              >
                3 Month
              </Button>{' '}
              <Button
                outline={!(duration === '6m')}
                onClick={() => durationChangeHandler('6m')}
              >
                6 Month
              </Button>
            </Col>
          </Row>

          <div style={{ float: 'right' }}>
            {Object.keys(chartOptions).map((opt, i) => (
              <span key={i}>
                <input
                  type="checkbox"
                  checked={chartOptions[opt]}
                  onChange={() => checkboxHandler(opt)}
                />
                <span style={allStyles.spanStyle}>{opt}</span>
              </span>
            ))}
          </div>
          <StockLineChart
            data={chartData}
            params={Object.keys(chartOptions).filter(opt => chartOptions[opt])}
          />
          <Card>
            <Table size="sm">
              <thead>
                <tr>
                  <th style={{ paddingLeft: 15 }}>Date</th>
                  <th>Open</th>
                  <th>Close</th>
                  <th>High</th>
                  <th>Low</th>
                  <th>Volume</th>
                </tr>
              </thead>
              <tbody>
                {chartData.map((data, i) => (
                  <tr key={i}>
                    <th scope="row" style={{ paddingLeft: 15 }}>
                      {data.date}
                    </th>
                    <td>${data.open}</td>
                    <td>${data.close}</td>
                    <td>${data.high}</td>
                    <td>${data.low}</td>
                    <td>${data.volume}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </>
      ) : null}
    </Page>
  );
};

export default withRouter(StockDetails);
