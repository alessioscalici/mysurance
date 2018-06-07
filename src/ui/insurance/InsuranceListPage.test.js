import '../../enzyme-init';
import React from 'react';

import { shallow } from 'enzyme';

import InsuranceListPage from './InsuranceListPage';


const removeInsurance = jest.fn();
const INSURANCES = [
  {
    id: 'ins1',
    title: 'Insurance 1',
    categoryId: 123,
    premium: 3000,
  },
  {
    id: 'ins2',
    title: 'Insurance 2',
    categoryId: 456,
    premium: 7000,
  },
];
const PREMIUM_SUM = 10000;

beforeEach(jest.clearAllMocks);

describe('basic render', () => {
  let component;

  beforeEach(() => {
    component = shallow((
      <InsuranceListPage
        insurances={INSURANCES}
        insurancesPremiumSum={PREMIUM_SUM}
        removeInsurance={removeInsurance}
      />
    ));
  });

  it('renders one insurance row per insurance', () => {
    const insuranceRows = component.find('.InsuranceListPage__insurance-row');
    expect(insuranceRows).toHaveLength(INSURANCES.length);
  });

  it('renders the premium sum in the last row', () => {
    const lastRow = component.find('tr').last();
    expect(lastRow.contains(PREMIUM_SUM)).toBe(true);
  });

  it('renders a button link to "/insurance/new" route', () => {
    const link = component.find('Link[to="/insurance/new"]');
    expect(link.exists()).toBe(true);
    const button = link.find('Button');
    expect(button.exists()).toBe(true);
  });

  it('on click on an insurance row, it selects the insurance', () => {
    const rows = component.find('.InsuranceListPage__insurance-row');
    rows.forEach((row, i) => {
      row.simulate('click');
      expect(component.state('selectedInsurance')).toBe(INSURANCES[i]);
    });
  });

  it('when an insurance is selected, it shows the confirm modal', () => {
    expect(component.find('ConfirmModal').prop('show')).toBe(false);
    component.setState({ selectedInsurance: INSURANCES[0] });
    expect(component.find('ConfirmModal').prop('show')).toBe(true);
  });

  it('when hiding the modal, it unselects the selected insurance', () => {
    component.setState({ selectedInsurance: INSURANCES[0] });
    component.find('ConfirmModal').prop('onHide')();

    expect(component.state('selectedInsurance')).toBeUndefined();
  });

  it('when clicking no to close the modal, it unselects the selected insurance', () => {
    component.setState({ selectedInsurance: INSURANCES[0] });
    component.find('ConfirmModal').prop('onClickNo')();

    expect(component.state('selectedInsurance')).toBeUndefined();
  });

  it('when clicking yes in the modal, it calls removeInsurance with the selected one', () => {
    component.setState({ selectedInsurance: INSURANCES[0] });
    component.find('ConfirmModal').prop('onClickYes')();

    expect(removeInsurance).toHaveBeenCalledWith(INSURANCES[0]);
    expect(component.state('selectedInsurance')).toBeUndefined();
  });
});
