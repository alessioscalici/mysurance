// @flow

import type { FluxStandardAction } from 'flux-standard-action';


export type InsuranceCategory = {
  title: string,
  id: number,
};

export type Insurance = {
  id: string,
  title: string,
  categoryId: number,
  premium: number,
};

export type InsuranceWithCategory = Insurance & {
  category: InsuranceCategory,
};

export type SetCategoriesAction = FluxStandardAction<string, Array<InsuranceCategory>, any>;
export type AddInsuranceAction = FluxStandardAction<string, Insurance, any>;
export type RemoveInsuranceAction = FluxStandardAction<string, Insurance, any>;
