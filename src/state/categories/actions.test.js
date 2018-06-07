import { isFSA } from 'flux-standard-action';

import { SET_CATEGORIES, setCategories } from './actions';


const MOCK_CATEGORY_LIST = [
  { id: 123, title: 'Mock Category' },
];



it('SET_CATEGORIES type must be defined as String', () => {
  expect(SET_CATEGORIES).toBeDefined();
})

describe('setCategories()', () => {
  let action;
  beforeEach(() => {
    action = setCategories(MOCK_CATEGORY_LIST);
  })

  it('action is a Flux Standard Action', () => {
    expect(isFSA(action)).toBe(true);
  })

  it('action must be of type SET_CATEGORIES', () => {
    expect(action.type).toBe(SET_CATEGORIES);
  })

  it('action payload is a list of categories', () => {
    expect(action.payload).toBeDefined();
    expect(action.payload).toBe(MOCK_CATEGORY_LIST);
  })
})
