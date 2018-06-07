// @flow

import type { FluxStandardAction } from 'flux-standard-action';
import type { InsuranceCategory, SetCategoriesAction } from '../../flow/types';

import { SET_CATEGORIES } from './actions';

export type CategoriesState = Array<InsuranceCategory>;



const categoriesMap = {
  [SET_CATEGORIES]: (state: Array<InsuranceCategory>, action: SetCategoriesAction) => {
    return action.payload;
  }
};

const categories = (
  state: Array<InsuranceCategory> = [],
  action: ?FluxStandardAction<string, any, any> = undefined,

) : Array<InsuranceCategory> => {

  if (!(action && categoriesMap[action.type])) {
    return state;
  }
  return categoriesMap[action.type](state, action);

};

export default categories;
