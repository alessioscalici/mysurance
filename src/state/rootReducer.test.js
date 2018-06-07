
import reducer from './rootReducer';




const initialState = reducer();


it('it defines a property "insurances"', () => {
  expect(initialState.insurances).toBeDefined();
})

it('it defines a property "categories"', () => {
  expect(initialState.categories).toBeDefined();
})
