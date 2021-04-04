import { Cake } from '../src/index';
const mocks = require('@cake/mocks');

describe('@core > creating a invalid cake', () => {
  it('should throw an error when specification is not met - invoked without an cake object', () => {
    expect(Cake).toThrow();
  });

  it('should throw an error when specification is not met - invoked with an empty object', () => {
    // creates cake with object that satisfies type constraints but not schema
    const newCake = () => Cake(mocks.core.cake.invalidDefault);
    expect(newCake).toThrow();
  });

  it('should throw an error when specification is not met - invoked with an zero id', () => {
    const newCake = () => Cake(mocks.core.cake.invalidZeroID);
    expect(newCake).toThrowError(`"id" must be greater than or equal to 1`);
  });
});

describe('@core > creating a a valid cake', () => {
  it('should create a cake when intanstiated witha valid object', () => {
    const cake = Cake(mocks.core.cake.valid);
    expect(cake).toEqual(mocks.core.cake.valid);
  });
});
