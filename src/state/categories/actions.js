// @flow

import type { InsuranceCategory, SetCategoriesAction } from '../../flow/types';


export const SET_CATEGORIES = 'categories/SET_CATEGORIES';

export const setCategories = (
  list: Array<InsuranceCategory>,
) : SetCategoriesAction => 
({
  type: SET_CATEGORIES,
  payload: list,
});
