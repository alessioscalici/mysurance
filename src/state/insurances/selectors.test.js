
import { getInsurances, getInsurancesPremiumSum, getInsurancesWithCategory } from './selectors';

import { getCategories } from '../categories/selectors';

jest.mock('../categories/selectors', () => jest.genMockFromModule('../categories/selectors'));


const MOCK_CATEGORIES = [
  { id: 123, title: 'Some category' },
  { id: 456, title: 'Some other category' },
];

const MOCK_STATE = {
  insurances: [
    {
      id: '123',
      title: 'Some insurance',
      categoryId: 123,
      premium: 10000,
    },
    {
      id: '456',
      title: 'Some other insurance',
      categoryId: 456,
      premium: 5000,
    }
  ],
};

// mocking selectors
beforeEach(() => {
  getCategories.mockReturnValue(MOCK_CATEGORIES);
});


describe('getInsurances', () => {
  it('returns the insurances prop', () => {
    expect(getInsurances(MOCK_STATE)).toBe(MOCK_STATE.insurances);
  })
})

describe('getInsurancesWithCategory', () => {
  it('returns the insurances enhanced with the related category', () => {
    const result = getInsurancesWithCategory(MOCK_STATE);

    expect(result.length).toBe(MOCK_STATE.insurances.length);
    MOCK_STATE.insurances.forEach((ins, i) => {
      expect(result[i]).toEqual({
        ...ins,
        category: MOCK_CATEGORIES.find(cat => cat.id === ins.categoryId),
      });
    });
  })
})

describe('getInsurancesPremiumSum', () => {
  it('returns the insurances premiums sum', () => {
    expect(getInsurancesPremiumSum(MOCK_STATE)).toBe(15000);
  })
})
