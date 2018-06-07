
import { getCategories } from './selectors';


const MOCK_STATE = {
  categories: [],
};


describe('getCategories', () => {
  it('returns the categories prop', () => {
    expect(getCategories(MOCK_STATE)).toBe(MOCK_STATE.categories);
  })
})
