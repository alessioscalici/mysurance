// @flow

import type { FluxStandardAction } from 'flux-standard-action';
import type { Insurance, AddInsuranceAction } from '../../flow/types';

import { ADD_INSURANCE, REMOVE_INSURANCE } from './actions';


export type InsurancesState = Array<Insurance>;


const insurancesMap = {
  [ADD_INSURANCE]: (state: InsurancesState, action: AddInsuranceAction) => {
    return [ ...state, action.payload ];
  },
  [REMOVE_INSURANCE]: (state: InsurancesState, action: AddInsuranceAction) => {
    return state.filter((item) => {
      if (action.payload != null) {
        return item.id !== action.payload.id;
      }
      return true;
    });
  },
};

const insurances = (
    state: InsurancesState = [],
    action: ?FluxStandardAction<string, any, any> = undefined,

  ) : InsurancesState => {

    if (!(action && insurancesMap[action.type])) {
      return state;
    }
    return insurancesMap[action.type](state, action);
};


export default insurances;
