
// @flow
import type { Insurance } from '../../flow/types';


import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import NewInsuranceForm from './NewInsuranceForm';

import { fetchCategories } from '../../state/categories/thunks';
import { getCategories } from '../../state/categories/selectors';
import { addInsurance } from '../../state/insurances/actions';

const mapStateToProps = (state: any) => ({
  categories: getCategories(state),
});

const mapDispatchToProps = (dispatch: Function, ownProps) => ({
  onComponentWillMount: () => {
    dispatch(fetchCategories());
  },

  onSubmit: (data: Insurance) => {
    data.premium = parseInt(data.premium, 10);
    data.categoryId = parseInt(data.categoryId, 10);
    data.id = `${data.categoryId}-${data.premium}-${data.title}`;
    dispatch(addInsurance(data));
    ownProps.history.push('/');
  },
});

const NewInsuranceFormContainer = connect(mapStateToProps, mapDispatchToProps)(NewInsuranceForm);
NewInsuranceFormContainer.displayName = 'NewInsuranceFormContainer';
export default withRouter(NewInsuranceFormContainer);
