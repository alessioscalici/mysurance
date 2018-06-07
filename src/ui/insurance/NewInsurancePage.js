// @flow

import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import NavBar from '../common/NavBar';

import NewInsuranceFormContainer from './NewInsuranceFormContainer';


const NewInsurancePage = () => (
  <div className="NewInsurancePage">
    <NavBar />
    <Grid>
      <Row>
        <Col xs={12}>
          <NewInsuranceFormContainer />
        </Col>
      </Row>
    </Grid>
  </div>
);

NewInsurancePage.displayName = 'NewInsurancePage';

export default NewInsurancePage;
