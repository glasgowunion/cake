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

export type AdaptorCreateCakeDynamoDBResponseRepositoryResponse = (
  input: DynamoDB.DocumentClient.ItemList,
) => CreateCakeRepositoryResponse;

export type AdaptorDeleteCakeDBResponseRepositoryResponse = (
  input: DynamoDB.DocumentClient.ItemList,
) => DeleteCakeRepositoryResponse;

export type AdaptorGetCakeDBResponseRepositoryResponse = (
  input: DynamoDB.DocumentClient.AttributeMap,
) => GetCakeRepositoryResponse;

/**
 * Implementations
 */

/**
 * make a all cakes resitory response from a dynamodb response
 */
function adaptorAllCakesDynamoDBResponseRepositoryResponse(
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

/**
 * make a get cake resitory response from a dynamodb response
 */
 function adaptorGetCakeDBResponseRepositoryResponse(
  input: DynamoDB.DocumentClient.AttributeMap,
): GetCakeRepositoryResponse {
    if (input.entries.length === 0) {
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
