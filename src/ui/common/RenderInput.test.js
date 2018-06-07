import '../../enzyme-init';
import React from 'react';

import { shallow } from 'enzyme';

import RenderInput from './RenderInput';


const ERROR_MSG = 'Password is required';
const LABEL_TEXT = 'Password';
const INPUT_TYPE = 'password';
const INPUT_VALUE = 'topsecret';


describe('When the input is untouched', () => {
  let component;

  beforeEach(() => {
    component = shallow((
      <RenderInput
        label={LABEL_TEXT}
        type={INPUT_TYPE}
        input={{ value: INPUT_VALUE }}
        meta={{ touched: false, error: ERROR_MSG }}
      />
    ));
  });

  it('renders the label', () => {
    expect(component.contains(LABEL_TEXT)).toBe(true);
  });

  it('passes the input props down to the input', () => {
    const input = component.find('input');
    expect(input.exists()).toBe(true);
    expect(input.prop('value')).toBe(INPUT_VALUE);
  });

  it('passes the input type to the input', () => {
    const input = component.find('input');
    expect(input.exists()).toBe(true);
    expect(input.prop('type')).toBe(INPUT_TYPE);
  });

  it('does not show the error message', () => {
    expect(component.contains(ERROR_MSG)).toBe(false);
  });
});

describe('When the input is touched', () => {
  let component;

  beforeEach(() => {
    component = shallow((
      <RenderInput
        label={LABEL_TEXT}
        type={INPUT_TYPE}
        input={{ value: INPUT_VALUE }}
        meta={{ touched: true, error: ERROR_MSG }}
      />
    ));
  });

  it('shows the error message', () => {
    expect(component.contains(ERROR_MSG)).toBe(true);
  });
});

describe('When the input is touched but there is no error', () => {
  let component;

  beforeEach(() => {
    component = shallow((
      <RenderInput
        label={LABEL_TEXT}
        type={INPUT_TYPE}
        input={{ value: INPUT_VALUE }}
        meta={{ touched: true, error: '' }}
      />
    ));
  });

  it('shows the error message', () => {
    expect(component.contains(ERROR_MSG)).toBe(false);
  });
});
