import '../../enzyme-init';
import React from 'react';

import { shallow } from 'enzyme';

import ConfirmModal from './ConfirmModal';


const onClickYes = jest.fn();
const onClickNo = jest.fn();
const onHide = jest.fn();
const TITLE = 'Modal title';
const TEXT = 'Modal text';
const SHOW = true;

beforeEach(jest.clearAllMocks);

describe('basic render', () => {
  let component;

  beforeEach(() => {
    component = shallow((
      <ConfirmModal
        onClickYes={onClickYes}
        onClickNo={onClickNo}
        onHide={onHide}
        title={TITLE}
        text={TEXT}
        show={SHOW}
      />
    ));
  });

  it('renders the title', () => {
    expect(component.contains(TITLE)).toBe(true);
  });

  it('renders the text', () => {
    expect(component.contains(TEXT)).toBe(true);
  });

  it('passes the show prop down to the Modal', () => {
    const modal = component.find('Modal');
    expect(modal.exists()).toBe(true);
    expect(modal.prop('show')).toBe(SHOW);
  });

  it('passes the show onHide down to the Modal', () => {
    const modal = component.find('Modal');
    expect(modal.exists()).toBe(true);
    expect(modal.prop('onHide')).toBe(onHide);
  });

  it('on click "no" button, calls onClickNo', () => {
    const noBtn = component.find('.ConfirmModal__no-btn');
    expect(noBtn.exists()).toBe(true);
    noBtn.simulate('click');
    expect(onClickNo).toHaveBeenCalled();
  });

  it('on click "yes" button, calls onClickNo', () => {
    const yesBtn = component.find('.ConfirmModal__yes-btn');
    expect(yesBtn.exists()).toBe(true);
    yesBtn.simulate('click');
    expect(onClickYes).toHaveBeenCalled();
  });
});
