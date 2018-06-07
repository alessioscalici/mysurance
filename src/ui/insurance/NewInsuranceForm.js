// @flow

import type { InsuranceCategory } from '../../flow/types';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';

import RenderSelect from '../common/RenderSelect';
import RenderInput from '../common/RenderInput';

const required = (value : string) : ?string => (value || parseInt(value, 10) === 0 ? undefined : 'Required');
const nonNegative = (value : string) : ?string  => (parseInt(value, 10) < 0 ? 'Must be a positive number' : undefined );


export type NewInsuranceFormProps = {
  onComponentWillMount: Function,
  onSubmit: Function,
  handleSubmit: Function,
  categories: Array<InsuranceCategory>,
  invalid: boolean,
  submitting: boolean,
};


export class NewInsuranceForm extends Component<NewInsuranceFormProps> {
  constructor(props: NewInsuranceFormProps) {
    super(props);
    (this:any).onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    const { onComponentWillMount } = this.props;
    if (onComponentWillMount) {
      onComponentWillMount();
    }
  }

  onSubmit(ev: Event) {
    const { handleSubmit } = this.props;
    ev.preventDefault();
    handleSubmit && handleSubmit();
  }

  render() {

    const { categories, invalid, submitting } = this.props;
    const categoryOptions = categories && categories.map(cat => (
      <option key={cat.id} value={cat.id}>{cat.title}</option>
    ));

    return (
      <Form horizontal className="NewInsuranceForm" onSubmit={this.onSubmit}>
        <Field
          component={RenderInput}
          name="title"
          label="Title*"
          validate={required}
        />

        <Field
          id="NewInsuranceForm__category"
          label="Category*"
          className="form-control"
          component={RenderSelect}
          name="categoryId"
          validate={required}
        >
          { categoryOptions }
        </Field>

        <Field
          component={RenderInput}
          type="number"
          min={0}
          name="premium"
          label="Premium*"
          validate={[required, nonNegative]}
        />

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button
              type="submit"
              bsStyle="primary"
              disabled={invalid || submitting}
            >
              Done
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

NewInsuranceForm.displayName = 'NewInsuranceForm';

NewInsuranceForm.propTypes = {
  onComponentWillMount: PropTypes.func,
};

export default reduxForm({ form: 'insurance' })(NewInsuranceForm);
