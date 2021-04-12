import { DynamoDB } from 'aws-sdk';

import { NewCakeEntity } from './Core.Entity.Cake';
import {
  EmptyRepositoryError,
  NotFoundRepositoryError,
} from './Contract.Repository.Errors';
import {
  AllCakesRepositoryResponse,
  CreateCakeRepositoryResponse,
  DeleteCakeRepositoryResponse,
  GetCakeRepositoryResponse,
} from './Contract.Repository.Responses';

/**
 * Convert DynamoDB responses into generic repository responses
 */

export type AdaptorAllCakesDynamoDBResponseRepositoryResponse = (
  input: DynamoDB.DocumentClient.ItemList | undefined,
) => AllCakesRepositoryResponse;

export type AdaptorDeleteCakeDBResponseRepositoryResponse = (
  input: DynamoDB.DocumentClient.AttributeMap | undefined,
) => DeleteCakeRepositoryResponse;

export type AdaptorGetCakeDBResponseRepositoryResponse = (
  input: DynamoDB.DocumentClient.AttributeMap | undefined,
) => GetCakeRepositoryResponse;

/**
 * make a all cakes resitory response from a dynamodb response
 */
export function adaptorAllCakesDynamoDBResponseRepositoryResponse(
  input: DynamoDB.DocumentClient.ItemList | undefined,
): AllCakesRepositoryResponse {
  if (input === undefined || input.length === 0) {
    return new EmptyRepositoryError('there are no cakes');
  }
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
 * make a create cake resitory response from a dynamodb response
 */
export function adaptorDeleteCakeDBResponseRepositoryResponse(
  input: DynamoDB.DocumentClient.AttributeMap | undefined,
): DeleteCakeRepositoryResponse {
  if (input === undefined) {
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
  input: DynamoDB.DocumentClient.AttributeMap | undefined,
): GetCakeRepositoryResponse {
  if (input === undefined) {
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
