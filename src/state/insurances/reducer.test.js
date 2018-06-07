
import { ADD_INSURANCE, REMOVE_INSURANCE } from './actions';
import reducer from './reducer';


const MOCK_INSURANCE = {
  id: '123',
  title: 'Some insurance',
  categoryId: 123,
  premium: 10000,
};

const MOCK_ADD_INSURANCE = {
  type: ADD_INSURANCE,
  payload: MOCK_INSURANCE,
};

const MOCK_REMOVE_INSURANCE = {
  type: REMOVE_INSURANCE,
  payload: MOCK_INSURANCE,
};

const initialState = reducer();


it('returns an empty array as initial state', () => {
  expect(initialState).toEqual([]);
})

describe('after action ADD_INSURANCE', () => {
  let state;
  beforeEach(() => {
    state = reducer(initialState, MOCK_ADD_INSURANCE);
  })

  it('returns a state equal to the initialState with the insurance appended', () => {
    expect(state).toEqual([ ...initialState, MOCK_INSURANCE ]);
  })
})

describe('after action REMOVE_INSURANCE', () => {
  let state;
  beforeEach(() => {
    state = reducer([MOCK_INSURANCE], MOCK_REMOVE_INSURANCE);
  })

  it('returns a state without the insurance', () => {
    expect(state).toEqual([]);
  })
})
