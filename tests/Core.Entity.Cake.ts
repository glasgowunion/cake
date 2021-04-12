import { NewCakeEntity, NewUnsavedCakePropties } from '../src/Core.Entity.Cake';
const {
  invalidDefault,
  invalidDefaultWithoutID,
  invalidZeroID,
  valid,
  validWithoutID,
} = require('../mocks/Core.Cake.Properties');

describe('@core > creating a invalid cake', () => {
  it('should throw an error when specification is not met - invoked without an cake object', () => {
    expect(NewCakeEntity).toThrow();
  });

  it('should throw an error when specification is not met - invoked with an empty object', () => {
    // creates cake with object that satisfies type constraints but not schema
    const newCake = () => NewCakeEntity(invalidDefault);
    expect(newCake).toThrow();
  });

  it('should throw an error when specification is not met - invoked with an zero id', () => {
    const newCake = () => NewCakeEntity(invalidZeroID);
    expect(newCake).toThrowError(`"id" must be greater than or equal to 1`);
  });
});

describe('@core > creating a a valid cake', () => {
  it('should create a cake when intanstiated witha valid object', () => {
    const cake = NewCakeEntity(valid);
    expect(cake).toEqual(valid);
  });
});

describe('@core > creating a invalid cake', () => {
  it('should throw an error when specification is not met - invoked without an cake object', () => {
    expect(NewUnsavedCakePropties).toThrow();
  });
});

describe('@core unsaved cakes > creating a a valid cake without an id', () => {
  it('should create a cake when intanstiated witha valid object', () => {
    const cake = NewUnsavedCakePropties(validWithoutID);
    expect(cake).toEqual(validWithoutID);
  });

  it('should throw an error when specification is not met - invoked with an empty object', () => {
    // creates cake with object that satisfies type constraints but not schema
    const newCake = () => NewUnsavedCakePropties(invalidDefaultWithoutID);
    expect(newCake).toThrow();
  });
});
