

import type { Insurance, AddInsuranceAction, RemoveInsuranceAction } from '../../flow/types';


export const ADD_INSURANCE = 'insurances/ADD_INSURANCE';

export const addInsurance = (
  insurance: Insurance,
) : AddInsuranceAction => 
({
  type: ADD_INSURANCE,
  payload: insurance,
});


export const REMOVE_INSURANCE = 'insurances/REMOVE_INSURANCE';

export const removeInsurance = (
  insurance: Insurance,
) : RemoveInsuranceAction => 
({
  type: REMOVE_INSURANCE,
  payload: insurance,
});
