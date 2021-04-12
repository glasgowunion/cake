import { DynamoDB } from 'aws-sdk';
import {
  adaptorAllCakesDynamoDBResponseRepositoryResponse,
  adaptorDeleteCakeDBResponseRepositoryResponse,
  adaptorGetCakeDBResponseRepositoryResponse,
} from '../src/Adaptor.DynamoDB.Responses.Respository.Responses';
import {
  EmptyRepositoryError,
  NotFoundRepositoryError,
} from '../src/Contract.Repository.Errors';
import { NewAllCakesRepository } from '../src/Service.Repository.AllCakes';
import { NewCreateCakesRepository } from '../src/Service.Repository.CreateCake';
import { NewDeleteCakeRepository } from '../src/Service.Repository.DeleteCake';
import { NewGetCakeRepository } from '../src/Service.Repository.GetCake';

import { valid as validEntity } from '../mocks/DynamoDB.Cake.Properties';
import { valid, validWithoutID } from '../mocks/Core.Cake.Properties';

describe('Service.Repository.AllCakes > Create new NewAllCakesRepository', () => {
  it('should fetch cakes when they exist in the repository', async () => {
    const Items: DynamoDB.DocumentClient.ItemList = [validEntity, validEntity];
    const promise = async () => ({ Items });
    const client: any = {
      scan() {
        return { promise };
      },
    };
    const repo = NewAllCakesRepository(
      'Mock',
      client,
      adaptorAllCakesDynamoDBResponseRepositoryResponse,
    );
    const test = await repo();
    expect(test).toStrictEqual([valid, valid]);
  });
  it('should return an empty error when there are no cakes in the repository', async () => {
    const promise = async () => ({}); // when there are no items returned we dont have an Items key
    const client: any = {
      scan() {
        return { promise };
      },
    };
    const repo = NewAllCakesRepository(
      'Mock',
      client,
      adaptorAllCakesDynamoDBResponseRepositoryResponse,
    );
    const test = await repo();
    expect(test).toBeInstanceOf(EmptyRepositoryError);
  });
});

describe('Service.Repository.CreateCake > NewCreateCakesRepository', () => {
  it('should fetch cakes when they exist in the repository', async () => {
    const promise = async () => ({}); // we don't use the returned Attributes field from Dynamodb
    const client: any = {
      put() {
        return { promise };
      },
    };
    const repo = NewCreateCakesRepository('Mock', client);
    const test = await repo(validWithoutID);
    expect(test.name).toStrictEqual(valid.name);
    expect(test.yumFactor).toStrictEqual(valid.yumFactor);
  });
});

describe('Service.Repository.DeleteCake > NewDeleteCakeRepository', () => {
  it('should delete by id cake when they exist in the repository', async () => {
    const Attributes: DynamoDB.DocumentClient.AttributeMap = validEntity;
    const promise = async () => ({ Attributes });
    const client: any = {
      delete() {
        return { promise };
      },
    };
    const repo = NewDeleteCakeRepository(
      'Mock',
      client,
      adaptorDeleteCakeDBResponseRepositoryResponse,
    );
    const test = await repo(1);
    expect(test).toStrictEqual(valid);
  });
  it('should return an not found error when it cant find the cake by id', async () => {
    const promise = async () => ({}); // when there are no items returned we dont have an Items key
    const client: any = {
      delete() {
        return { promise };
      },
    };
    const repo = NewDeleteCakeRepository(
      'Mock',
      client,
      adaptorDeleteCakeDBResponseRepositoryResponse,
    );
    const test = await repo(1);
    expect(test).toBeInstanceOf(NotFoundRepositoryError);
  });
});

describe('Service.Repository.GetCake > NewGetCakeRepository', () => {
  it('should get by id cake when they exist in the repository', async () => {
    const Item: DynamoDB.DocumentClient.AttributeMap = validEntity;
    const promise = async () => ({ Item });
    const client: any = {
      get() {
        return { promise };
      },
    };
    const repo = NewGetCakeRepository(
      'Mock',
      client,
      adaptorGetCakeDBResponseRepositoryResponse,
    );
    const test = await repo(1);
    expect(test).toStrictEqual(valid);
  });
  it('should return an not found error when it cant find the cake by id', async () => {
    const promise = async () => ({}); // when there are no items returned we dont have an Items key
    const client: any = {
      get() {
        return { promise };
      },
    };
    const repo = NewGetCakeRepository(
      'Mock',
      client,
      adaptorGetCakeDBResponseRepositoryResponse,
    );
    const test = await repo(1);
    expect(test).toBeInstanceOf(NotFoundRepositoryError);
  });
});
