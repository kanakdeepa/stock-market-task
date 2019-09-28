import React from 'react';
import Page from 'components/Page';
import {
  Table,
  Row,
  Col,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
} from 'reactstrap';
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

const StockDetails = () => {
  return (
    <Page title="Apple Inc">
      <Row>
        <Col xs={12} sm={6}>
          <UncontrolledButtonDropdown>
            <DropdownToggle
              caret
              color="primary"
              className="text-capitalize m-1"
            >
              Select Duration
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>1 Month</DropdownItem>
              <DropdownItem>3 Month</DropdownItem>
              <DropdownItem>6 Month</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </Col>
      </Row>
      {/* <Line data={genLineData({ fill: false }, { fill: false })} /> */}
      <Card>
        <Table size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </Page>
  );
};

export default StockDetails;
