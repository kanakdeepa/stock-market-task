import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { getCompanyDetails } from '../services/stockService';
import { NavLink } from 'react-router-dom';
import loader from '../assets/img/rollingLoader.svg';

class StockCard extends Component {
  state = {
    loading: true,
    companyDetails: null,
    errorMessage: '',
  };

  componentDidMount = () => {
    getCompanyDetails(this.props.symbol)
      .then(result => {
        this.setState({ companyDetails: result.data, loading: false });
      })
      .catch(err => {
        console.log('Error', err);
        this.setState({ errorMessage: 'No details found', loading: false });
      });
  };

  render() {
    const { loading, companyDetails, errorMessage } = this.state;
    const { symbol } = this.props;

    return (
      <NavLink to={`/stock/${symbol}`}>
        <Card
          style={{
            cursor: 'pointer',
            '&:hover': {
              textDecoration: 'none',
            },
          }}
        >
          <CardBody>
            <CardTitle style={{ fontWeight: 600 }}>{symbol}</CardTitle>
            {companyDetails && (
              <CardText>
                <p>{companyDetails.companyName}</p>
                <p style={{ fontSize: 12 }}>{companyDetails.industry}</p>
                <p style={{ fontSize: 12 }}>{companyDetails.sector}</p>
              </CardText>
            )}
            {errorMessage ? <CardText>{errorMessage}</CardText> : null}

            {loading ? <img src={loader} alt="loading" /> : null}
          </CardBody>
        </Card>
      </NavLink>
    );
  }
}

export default StockCard;
