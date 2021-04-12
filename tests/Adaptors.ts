import {
  eventToCake,
  adaptorAPIEventRepositoryIDParameter,
} from '../src/Adaptor.API.Event.Repository.Parameters';
import {
  adaptorAllCakesDynamoDBResponseRepositoryResponse,
  adaptorDeleteCakeDBResponseRepositoryResponse,
  adaptorGetCakeDBResponseRepositoryResponse,
} from '../src/Adaptor.DynamoDB.Responses.Respository.Responses';
import {
  allCakesToResponse,
  deleteCakeToResponse,
  adaptorGetCakeRepositoryResponseAPIResponse,
} from '../src/Adaptor.Repository.Responses.API.Responses';
import {
  invalidDefaultWithoutID,
  validWithoutID,
  valid,
} from '../mocks/Core.Cake.Properties';
import { valid as dynamodbValid } from '../mocks/DynamoDB.Cake.Properties';

import { DynamoDB } from 'aws-sdk';
import {
  EmptyRepositoryError,
  NotFoundRepositoryError,
} from '../src/Contract.Repository.Errors';

// Adaptor.API.Event.Repository.Parameters

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

describe('Adaptor.API.Event.Repository.Parameters > adaptorAPIEventRepositoryIDParameter', () => {
  it('should throw an error when pathParameters are null', () => {
    const event: any = { pathParameters: null };
    const test = () => adaptorAPIEventRepositoryIDParameter(event);

    expect(test).toThrow();
  });

  it('should throw an error when id is null', () => {
    const event: any = { pathParameters: { id: null } };
    const test = () => adaptorAPIEventRepositoryIDParameter(event);

    expect(test).toThrow();
  });

  it('should throw an error when id is a character string', () => {
    const event: any = { pathParameters: { id: 'shouldthrowanerror' } };
    const test = () => adaptorAPIEventRepositoryIDParameter(event);

    expect(test).toThrow();
  });

  it('should throw an error when id is a float number string', () => {
    const event: any = { pathParameters: { id: '2002.5000201' } };
    const test = () => adaptorAPIEventRepositoryIDParameter(event);

    expect(test).toThrow();
  });

  it('should convert to a valid set of parameters when event params id is a numeric id', () => {
    const event: any = { pathParameters: { id: 1 } };
    const test = () => adaptorAPIEventRepositoryIDParameter(event);

    expect(test()).toEqual(1);
  });

  it('should convert to a valid set of parameters when event params id is a string id (that can be converted to a number)', () => {
    const event: any = { pathParameters: { id: '1' } };
    const test = () => adaptorAPIEventRepositoryIDParameter(event);

    expect(test()).toEqual(1);
  });
});

// Adaptor.DynamoDB.Responses.Respository.Responses

describe('Adaptor.DynamoDB.Responses.Respository.Responses > adaptorAllCakesDynamoDBResponseRepositoryResponse', () => {
  it('should should return an empty array when there are no items present', () => {
    const input: DynamoDB.DocumentClient.AttributeMap[] = [];
    const test = adaptorAllCakesDynamoDBResponseRepositoryResponse(input);
    expect(test).toStrictEqual([]);
  });

  it('should should return an cake array when there are cakes to return', () => {
    const input: DynamoDB.DocumentClient.AttributeMap[] = [
      dynamodbValid,
      dynamodbValid,
    ];
    const test = adaptorAllCakesDynamoDBResponseRepositoryResponse(input);
    expect(test).toStrictEqual([valid, valid]);
  });
});

describe('Adaptor.DynamoDB.Responses.Respository.Responses > adaptorDeleteCakeDBResponseRepositoryResponse', () => {
  it('should should return a not found error when there are no items present', () => {
    const input: any = undefined;
    const test = adaptorDeleteCakeDBResponseRepositoryResponse(input);
    expect(test).toBeInstanceOf(NotFoundRepositoryError);
  });

  it('should should return an cake when there is cake to matching that id in dynamodb', () => {
    const input: DynamoDB.DocumentClient.AttributeMap = dynamodbValid;
    const test = adaptorDeleteCakeDBResponseRepositoryResponse(input);
    expect(test).toStrictEqual(valid);
  });
});

describe('Adaptor.DynamoDB.Responses.Respository.Responses > adaptorGetCakeDBResponseRepositoryResponse', () => {
  it('should should return a not found error when there are no items present', () => {
    const input: any = undefined;
    const test = adaptorGetCakeDBResponseRepositoryResponse(input);
    expect(test).toBeInstanceOf(NotFoundRepositoryError);
  });

  it('should should return an cake when there is cake to matching that id in dynamodb', () => {
    const input: DynamoDB.DocumentClient.AttributeMap = dynamodbValid;
    const test = adaptorGetCakeDBResponseRepositoryResponse(input);
    expect(test).toStrictEqual(valid);
  });
});

// Adaptor.Repository.Responses.API.Responses

describe('Adaptor.Repository.Responses.API.Responses > allCakesToResponse', () => {
  it('should should return an cake array with a 200 success apigateway response', () => {
    const input = [valid, valid];
    const test = allCakesToResponse(input);
    expect(test.statusCode).toEqual(200);
    expect(test.body).toEqual(JSON.stringify([valid, valid]));
  });
  it('should should return a 204 success apigateway response when repository is empty', () => {
    const input = new EmptyRepositoryError();
    const test = allCakesToResponse(input);
    expect(test.statusCode).toEqual(204);
  });
});

describe('Adaptor.Repository.Responses.API.Responses > deleteCakeToResponse', () => {
  it('should should return an cake with a 200 success apigateway response', () => {
    const input = valid;
    const test = deleteCakeToResponse(input);
    expect(test.statusCode).toEqual(200);
    expect(test.body).toEqual(JSON.stringify(valid));
  });

  it('should should return an error with a 404 when is revieves not found dynamodb error', () => {
    const input = new NotFoundRepositoryError();
    const test = deleteCakeToResponse(input);
    expect(test.statusCode).toEqual(404);
  });
});

describe('Adaptor.Repository.Responses.API.Responses > adaptorGetCakeRepositoryResponseAPIResponse', () => {
  it('should should return an cake with a 200 success apigateway response', () => {
    const input = valid;
    const test = adaptorGetCakeRepositoryResponseAPIResponse(input);
    expect(test.statusCode).toEqual(200);
    expect(test.body).toEqual(JSON.stringify(valid));
  });

  it('should should return an error with a 404 when is revieves not found dynamodb error', () => {
    const input = new NotFoundRepositoryError();
    const test = adaptorGetCakeRepositoryResponseAPIResponse(input);
    expect(test.statusCode).toEqual(404);
  });
});
