// @flow

import type { Node } from 'react';

import React from 'react';
import PropTypes from 'prop-types';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';

export type RenderSelectProps = {
  input: any,
  meta: {
    touched: boolean,
    error: boolean,
  },
  label?: string,
  type?: string,
  children: Node,
};

const RenderSelect = ({
  input, meta: { touched, error }, label, children,
} : RenderSelectProps) => {
  const containerClasses = (touched && error) ? 'RenderSelect has-error' : 'RenderSelect';

  const errorBox = touched && error ?
    <span className="help-block">{error}</span> :
    null;

  return (
    <FormGroup className={containerClasses}>
      <Col componentClass={ControlLabel} sm={2}>
        {label}
      </Col>
      <Col sm={10}>
        <select
          className="form-control"
          {...input}
        >
          <option value=""></option>
          { children }
        </select>
        {errorBox}
      </Col>
    </FormGroup>
  );
};

RenderSelect.propTypes = {
  input: PropTypes.shape({}),
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  label: PropTypes.string,
  children: PropTypes.node,
};

RenderSelect.defaultProps = {
  input: {},
  meta: {
    touched: false,
    error: {},
  },
  label: null,
  children: null,
};
export default RenderSelect;
