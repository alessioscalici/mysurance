// @flow
import type { InsuranceWithCategory } from '../../flow/types';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/lib/Table';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import NavBar from '../common/NavBar';
import ConfirmModal from '../common/ConfirmModal';


declare type InsuranceListPageProps = {
  insurances: Array<InsuranceWithCategory>,
  insurancesPremiumSum: number,
  removeInsurance: Function,
};

declare type InsuranceListPageState = {
  selectedInsurance?: InsuranceWithCategory,
};


class InsuranceListPage extends Component<InsuranceListPageProps, InsuranceListPageState> {
  constructor(props: InsuranceListPageProps) {
    super(props);
    this.state = {
      selectedInsurance: undefined,
    };
  }

  render() {
    const { insurances, insurancesPremiumSum, removeInsurance } = this.props;
    const insuranceRows = insurances && insurances.length ?
      insurances.map((ins: InsuranceWithCategory) => (
        <tr
          key={`${ins.title}${ins.categoryId}`}
          onClick={() => { this.setState({ selectedInsurance: ins});}}
          className="InsuranceListPage__insurance-row"
        >
          <td>{ins.title}</td>
          <td>{ ins.category && ins.category.title }</td>
          <td>{ins.premium}</td>
        </tr>
      )) :
      (
        <tr>
          <td colspan="3">There is no insurance yet!</td>
        </tr>
      );

    return (
      <div className="InsuranceListPage">
        <NavBar />
        <Grid>
          <Row>
            <Col xs={12}>
              <Link to="/insurance/new" className="pull-right">
                <Button bsStyle="primary">Add insurance</Button>
              </Link>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={12}>
              <Table responsive striped condensed hover>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {insuranceRows}
                  <tr>
                    <th>Sum</th>
                    <td />
                    <td>{insurancesPremiumSum}</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
        <ConfirmModal
          show={!!this.state.selectedInsurance}
          text={`Are you sure to delete "${this.state.selectedInsurance != null ? this.state.selectedInsurance.title : ''}"?`}
          title="Delete"
          onHide={() => { this.setState({ selectedInsurance: undefined }) }}
          onClickYes={() => { removeInsurance(this.state.selectedInsurance); this.setState({ selectedInsurance: undefined }) }}
          onClickNo={() => { this.setState({ selectedInsurance: undefined }) }}
        />
      </div>
    );
  }
}

export default InsuranceListPage;
