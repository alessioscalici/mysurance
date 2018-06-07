// @flow
import type { InsurancesState } from './insurances/reducer';
import type { CategoriesState } from './categories/reducer';


import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'

import insurances from './insurances/reducer';
import categories from './categories/reducer';

export type AppState = {
  insurances: InsurancesState,
  categories: CategoriesState,
};

export default combineReducers({
  insurances,
  categories,
  form,
});
