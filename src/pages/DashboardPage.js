import Page from 'components/Page';
import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class DashboardPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Page className="DashboardPage" title="Dashboard">
        <Row>
          <Col sm={6} xs={12}>
            <NavLink to="/search">
              <Button color="success" size="lg" block>
                Search Stock Peers
              </Button>
            </NavLink>
          </Col>
        </Row>
      </Page>
    );
  }
}
export default DashboardPage;
