import { LambdaAnyResponse } from './Contract.Lambda.Responses';
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

export type AdaptorAllCakesRepositoryResponseAPIResponse = (
  input: AllCakesRepositoryResponse,
) => LambdaAnyResponse;

export type AdaptorCreateCakeRepositoryResponseAPIResponse = (
  input: CreateCakeRepositoryResponse,
) => LambdaAnyResponse;

export type AdaptorDeleteCakeRepositoryResponseAPIResponse = (
  input: DeleteCakeRepositoryResponse,
) => LambdaAnyResponse;

export type AdaptorGetCakeRepositoryResponseAPIResponse = (
  input: GetCakeRepositoryResponse,
) => LambdaAnyResponse;

/**
 * Implementations
 */

/**
 * make a api gateway proxy response from a generic cake repository response
 */
function cakeToResponse(input: any): LambdaAnyResponse {
  if (input instanceof NotFoundRepositoryError) {
    return {
      statusCode: 404,
      body: JSON.stringify(input.message),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(input),
  };
}

/* make a api gateway proxy response from a generic cakes repository response
 */
function cakesToResponse(input: any): LambdaAnyResponse {
  if (input instanceof EmptyRepositoryError) {
    return {
      statusCode: 204,
      body: JSON.stringify(input.message),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(input),
  };
}

/**
 * make a successful reponse with a cake
 */
function successfulCakeResponse(input: any): LambdaAnyResponse {
  return {
    statusCode: 200,
    body: JSON.stringify(input),
  };
}

/**
 * make a api gateway proxy response from a get repository response
 */
export function getCakeToResponse(
  input: GetCakeRepositoryResponse,
): LambdaAnyResponse {
  return cakeToResponse(input);
}

/**
 * make a api gateway proxy response to delete cake repository response
 */
export function deleteCakeToResponse(
  input: DeleteCakeRepositoryResponse,
): LambdaAnyResponse {
  return cakeToResponse(input);
}

/**
 * make a api gateway proxy response to delete cake repository response
 */
export function allCakesToResponse(
  input: AllCakesRepositoryResponse,
): LambdaAnyResponse {
  return cakesToResponse(input);
}

/**
 * make a api gateway proxy response to delete cake repository response
 */
export function createCakeToResponse(
  input: CreateCakeRepositoryResponse,
): LambdaAnyResponse {
  return successfulCakeResponse(input);
}
