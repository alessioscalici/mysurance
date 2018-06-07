// @flow
import type { AppState } from '../rootReducer';

import { createSelector } from 'reselect';

import { getCategories } from '../categories/selectors';

 


export const getInsurances = (state: AppState) => state.insurances;

export const getInsurancesWithCategory = createSelector(
  getInsurances,
  getCategories,
  (insurances, categories) => {
    return insurances && insurances.map((ins) => {
      const category = (categories && categories.find(cat => cat.id === ins.categoryId)) || {};
      return { ...ins, category };
    });
  }
);

export const getInsurancesPremiumSum = createSelector(
  getInsurances,
  (insurances) => {
    return insurances && insurances.reduce((acc, ins) => (acc + (ins.premium || 0)), 0);
  }
);
