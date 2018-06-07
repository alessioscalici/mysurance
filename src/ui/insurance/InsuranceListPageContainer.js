
// @flow

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import InsuranceListPage from './InsuranceListPage';

import { getInsurancesWithCategory, getInsurancesPremiumSum } from '../../state/insurances/selectors';
import { removeInsurance } from '../../state/insurances/actions';

const mapStateToProps = (state: any) => ({
  insurances: getInsurancesWithCategory(state),
  insurancesPremiumSum: getInsurancesPremiumSum(state),
});

const mapDispatchToProps = (dispatch: Function) => ({
  removeInsurance: (ins) => dispatch(removeInsurance(ins)),
});


const InsuranceListPageContainer = connect(mapStateToProps, mapDispatchToProps)(InsuranceListPage);
InsuranceListPageContainer.displayName = 'InsuranceListPageContainer';
export default withRouter(InsuranceListPageContainer);
