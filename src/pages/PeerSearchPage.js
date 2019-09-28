import React, { useState } from 'react';
import Page from 'components/Page';
import {
  Button,
  Col,
  Row,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { searchPeers } from '../actions';
import StockCard from '../components/StockCard';

const PeerSearchPage = () => {
  const peers = useSelector(state => state.stockState.peers);
  const dispatch = useDispatch();

  const [quote, setQuote] = useState('');

  const submitHandler = evt => {
    evt.preventDefault();

    dispatch(searchPeers(quote));
  };

  return (
    <Page title="Search Peers">
      <Row>
        <Col xs={12}>
          <form onSubmit={submitHandler}>
            <InputGroup>
              <Input
                placeholder="Search Stock Quote. Ex: AAPL"
                onChange={e => setQuote(e.target.value)}
                value={quote}
              />
              <InputGroupAddon addonType="append">
                <Button color="success">Search Peers</Button>
              </InputGroupAddon>
            </InputGroup>
          </form>
        </Col>
      </Row>

      {peers && peers === 'NOT_FOUND' ? (
        <div
          style={{
            background: 'orange',
            padding: '10px 15px',
            borderRadius: 3,
          }}
        >
          Unknown Symbol
        </div>
      ) : peers.length ? (
        <Row>
          {peers.map((peer, i) => (
            <Col sm={4} xs={12} key={i}>
              <StockCard symbol={peer} />
            </Col>
          ))}
        </Row>
      ) : null}
    </Page>
  );
};

export default PeerSearchPage;
