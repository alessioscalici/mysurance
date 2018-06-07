import { isFSA } from 'flux-standard-action';

import { ADD_INSURANCE, addInsurance, REMOVE_INSURANCE, removeInsurance } from './actions';


const MOCK_INSURANCE = {
  id: '123',
  title: 'Some insurance',
  categoryId: 123,
  premium: 10000,
};


it('ADD_INSURANCE type must be defined as String', () => {
  expect(ADD_INSURANCE).toBeDefined();
})

describe('addInsurance()', () => {
  let action;
  beforeEach(() => {
    action = addInsurance(MOCK_INSURANCE);
  })

  it('action is a Flux Standard Action', () => {
    expect(isFSA(action)).toBe(true);
  })

  it('action must be of type ADD_INSURANCE', () => {
    expect(action.type).toBe(ADD_INSURANCE);
  })

  it('action payload is an insurance', () => {
    expect(action.payload).toBeDefined();
    expect(action.payload).toBe(MOCK_INSURANCE);
  })
})


it('REMOVE_INSURANCE type must be defined as String', () => {
  expect(REMOVE_INSURANCE).toBeDefined();
})

describe('removeInsurance()', () => {
  let action;
  beforeEach(() => {
    action = removeInsurance(MOCK_INSURANCE);
  })

  it('action is a Flux Standard Action', () => {
    expect(isFSA(action)).toBe(true);
  })

  it('action must be of type REMOVE_INSURANCE', () => {
    expect(action.type).toBe(REMOVE_INSURANCE);
  })

  it('action payload is an insurance', () => {
    expect(action.payload).toBeDefined();
    expect(action.payload).toBe(MOCK_INSURANCE);
  })
})
