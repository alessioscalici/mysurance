// @flow

import React from 'react';
import PropTypes from 'prop-types';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';

export type RenderInputProps = {
  input: any,
  meta: {
    touched: boolean,
    error: string,
  },
  label?: string,
  type?: string,
};

const RenderInput = ({
  input, meta: { touched, error }, label, type,
} : RenderInputProps) => {
  const containerClasses = (touched && error) ? 'RenderInput has-error' : 'RenderInput';

  const errorBox = touched && error ?
    <span className="help-block">{error}</span> :
    null;

  return (
    <FormGroup className={containerClasses}>
      <Col componentClass={ControlLabel} sm={2}>
        {label}
      </Col>
      <Col sm={10}>
        <input
          className="form-control"
          {...input}
          type={type || 'text'}
        />
        {errorBox}
      </Col>
    </FormGroup>
  );
};

RenderInput.propTypes = {
  input: PropTypes.shape({}),
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  label: PropTypes.node,
  type: PropTypes.string,
};

RenderInput.defaultProps = {
  input: {},
  meta: {
    touched: false,
    error: {},
  },
  label: null,
  type: 'text',
};
export default RenderInput;
