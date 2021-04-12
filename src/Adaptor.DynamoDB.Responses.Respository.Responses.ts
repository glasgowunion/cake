import { DynamoDB } from 'aws-sdk';

import { CakeEntity, NewCakeEntity } from './Core.Entity.Cake';

import { NotFoundRepositoryError } from './Contract.Repository.Errors';
import {
  AllCakesRepositoryResponse,
  CreateCakeRepositoryResponse,
  DeleteCakeRepositoryResponse,
  GetCakeRepositoryResponse,
} from './Contract.Repository.Responses';

export type AdaptorAllCakesDynamoDBResponseRepositoryResponse = (
  input: DynamoDB.DocumentClient.ItemList,
) => AllCakesRepositoryResponse;

export type AdaptorDeleteCakeDBResponseRepositoryResponse = (
  input: DynamoDB.DocumentClient.AttributeMap,
) => DeleteCakeRepositoryResponse;

export type AdaptorGetCakeDBResponseRepositoryResponse = (
  input: DynamoDB.DocumentClient.AttributeMap,
) => GetCakeRepositoryResponse;

/**
 * make a all cakes resitory response from a dynamodb response
 */
export function adaptorAllCakesDynamoDBResponseRepositoryResponse(
  input: DynamoDB.DocumentClient.ItemList,
): AllCakesRepositoryResponse {
  return input.map(v => {
    return NewCakeEntity({
      comment: v.comment,
      id: v.pk,
      imageUrl: v.imageUrl,
      name: v.name,
      yumFactor: v.yumFactor,
    });
  });
}

// test for an empty object
const isEmptyObject = (obj:any) => obj && Object.keys(obj).length === 0 && obj.constructor === Object

/**
 * make a create cake resitory response from a dynamodb response
 */
export function adaptorDeleteCakeDBResponseRepositoryResponse(
  input: DynamoDB.DocumentClient.AttributeMap,
): DeleteCakeRepositoryResponse {
  if (isEmptyObject(input)) {
    return new NotFoundRepositoryError();
  }
  return NewCakeEntity({
    comment: input.comment,
    id: input.pk,
    imageUrl: input.imageUrl,
    name: input.name,
    yumFactor: input.yumFactor,
  });
}

/**
 * make a get cake resitory response from a dynamodb response
 */
export function adaptorGetCakeDBResponseRepositoryResponse(
  input: DynamoDB.DocumentClient.AttributeMap,
): GetCakeRepositoryResponse {
  if (isEmptyObject(input)) {
    return new NotFoundRepositoryError();
  }
  return NewCakeEntity({
    comment: input.comment,
    id: input.pk,
    imageUrl: input.imageUrl,
    name: input.name,
    yumFactor: input.yumFactor,
  });
}
