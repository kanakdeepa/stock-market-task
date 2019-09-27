import React from 'react';
import Page from 'components/Page';
import {
  Button,
  Col,
  Row,
  InputGroup,
  Input,
  InputGroupAddon,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';

const PeerSearchPage = () => {
  return (
    <Page title="Search Peers">
      <Row>
        <Col xs={12}>
          <InputGroup>
            <Input placeholder="Search Stock Quote. Ex: AAPL" />
            <InputGroupAddon addonType="append">
              <Button color="success">Search Peers</Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>

      <Row>
        <Col sm={4} xs={12}>
          <Card className="flex-row">
            <CardBody>
              <CardTitle>Horizontal Image Card(Left)</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
  );
};

export default PeerSearchPage;
