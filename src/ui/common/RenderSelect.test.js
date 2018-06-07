import '../../enzyme-init';
import React from 'react';

import { shallow } from 'enzyme';

import RenderSelect from './RenderSelect';

const LABEL_TEXT = 'Number';
const ERROR_MSG = 'Number is required';
const CHILDREN = [
  <option key="1" value="1">One</option>,
  <option key="2" value="2">Two</option>,
];


describe('When the input is untouched', () => {
  let component;

  beforeEach(() => {
    component = shallow((
      <RenderSelect
        label={LABEL_TEXT}
        meta={{ touched: false, error: ERROR_MSG }}
      >
        {CHILDREN}
      </RenderSelect>
    ));
  });

  it('renders the label', () => {
    expect(component.contains(LABEL_TEXT)).toBe(true);
  });

  it('does not show the error message', () => {
    expect(component.contains(ERROR_MSG)).toBe(false);
  });

  it('renders an empty option as the first option', () => {
    const firstOption = component.find('option').first();
    expect(firstOption.exists()).toBe(true);
  });

  it('renders the children after the first empty option', () => {
    component.find('option').forEach((opt, i) => {
      if (i === 0) {
        expect(opt.prop('value')).toBe('');
      } else {
        expect(opt.equals(CHILDREN[i - 1])).toBe(true);
      }
    });
  });
});

describe('When the input is touched', () => {
  let component;

  beforeEach(() => {
    component = shallow((
      <RenderSelect
        label={LABEL_TEXT}
        meta={{ touched: true, error: ERROR_MSG }}
      >
        {CHILDREN}
      </RenderSelect>
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
      <RenderSelect
        label={LABEL_TEXT}
        meta={{ touched: true, error: '' }}
      >
        {CHILDREN}
      </RenderSelect>
    ));
  });

  it('shows the error message', () => {
    expect(component.contains(ERROR_MSG)).toBe(false);
  });
});
