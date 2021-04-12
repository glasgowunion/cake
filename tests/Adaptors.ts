import {
  eventToCake,
  eventToID,
} from '../src/Adaptor.API.Event.Repository.Parameters';
// import {
//   adaptorAllCakesDynamoDBResponseRepositoryResponse,
//   adaptorDeleteCakeDBResponseRepositoryResponse,
//   adaptorGetCakeDBResponseRepositoryResponse,
// } from '../src/Adaptor.DynamoDB.Responses.Respository.Responses';
// import {
//   getCakeToResponse,
//   deleteCakeToResponse,
//   allCakesToResponse,
// } from '../src/Adaptor.Repository.Responses.API.Responses';
import {
  invalidDefaultWithoutID,
  validWithoutID,
} from '../mocks/Core.Cake.Properties';

describe('Adaptor.API.Event.Repository.Parameters > eventToCake', () => {
  it('should throw an error when specification is not met - invoked without an cake object', () => {
    const event: any = { body: JSON.stringify(invalidDefaultWithoutID) };
    const test = () => eventToCake(event);

    expect(test).toThrow();
  });

  it('should throw an error when body is null', () => {
    const event: any = { body: null };
    const test = () => eventToCake(event);

    expect(test).toThrow();
  });

  it('should convert to a valid set of parameters when event body is a valid set of cake properties', () => {
    const event: any = { body: JSON.stringify(validWithoutID) };
    const test = () => eventToCake(event);

    expect(test()).toEqual(validWithoutID);
  });
});

describe('Adaptor.API.Event.Repository.Parameters > eventToID', () => {

  it('should throw an error when pathParameters are null', () => {
    const event: any = { pathParameters: null };
    const test = () => eventToID(event);

    expect(test).toThrow();
  });

  it('should throw an error when id is null', () => {
    const event: any = { pathParameters: { id: null } };
    const test = () => eventToID(event);

    expect(test).toThrow();
  });

  it('should throw an error when id is a character string', () => {
    const event: any = { pathParameters: { id: 'shouldthrowanerror' } };
    const test = () => eventToID(event);

    expect(test).toThrow();
  });

  it('should throw an error when id is a float number string', () => {
    const event: any = { pathParameters: { id: '2002.5000201' } };
    const test = () => eventToID(event);

    expect(test).toThrow();
  });

  it('should convert to a valid set of parameters when event params id is a numeric id', () => {
    const event: any = { pathParameters: { id: 1 } };
    const test = () => eventToID(event);

    expect(test()).toEqual(1);
  });

  it('should convert to a valid set of parameters when event params id is a string id (that can be converted to a number)', () => {
    const event: any = { pathParameters: { id: "1" } };
    const test = () => eventToID(event);

    expect(test()).toEqual(1);
  });
});
