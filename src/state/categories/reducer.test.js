
import { SET_CATEGORIES } from './actions';
import reducer from './reducer';


const MOCK_CATEGORY_LIST = [
  { id: 123, title: 'Mock Category' },
];

const MOCK_SET_CATEGORIES = {
  type: SET_CATEGORIES,
  payload: MOCK_CATEGORY_LIST,
};

const initialState = reducer();


it('returns an empty array as initial state', () => {
  expect(initialState).toEqual([]);
})

describe('after action SET_CATEGORIES', () => {
  let state;
  beforeEach(() => {
    state = reducer(initialState, MOCK_SET_CATEGORIES);
  })

  it('returns a state equal to the payload list', () => {
    expect(state).toEqual(MOCK_CATEGORY_LIST);
  })
})
