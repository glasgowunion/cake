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

/**
 * convert all cakes repository response into a apigw api response
 */
export type AdaptorAllCakesRepositoryResponseAPIResponse = (
  input: AllCakesRepositoryResponse,
) => LambdaAnyResponse;

/**
 * convert create cake repository response into a apigw api response
 */
export type AdaptorCreateCakeRepositoryResponseAPIResponse = (
  input: CreateCakeRepositoryResponse,
) => LambdaAnyResponse;

/**
 * convert delete repository response into a apigw api response
 */
export type AdaptorDeleteCakeRepositoryResponseAPIResponse = (
  input: DeleteCakeRepositoryResponse,
) => LambdaAnyResponse;

/**
 * convert get repository response into a apigw api response
 */
export type AdaptorGetCakeRepositoryResponseAPIResponse = (
  input: GetCakeRepositoryResponse,
) => LambdaAnyResponse;

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
export function adaptorGetCakeRepositoryResponseAPIResponse(
  input: GetCakeRepositoryResponse,
): LambdaAnyResponse {
  return cakeToResponse(input);
}

/**
 * make a api gateway proxy response to delete cake repository response
 */
export function adaptorDeleteCakeRepositoryResponseAPIResponse(
  input: DeleteCakeRepositoryResponse,
): LambdaAnyResponse {
  return cakeToResponse(input);
}

/**
 * make a api gateway proxy response to delete cake repository response
 */
export function adaptorAllCakesRepositoryResponseAPIResponse(
  input: AllCakesRepositoryResponse,
): LambdaAnyResponse {
  return cakesToResponse(input);
}

/**
 * make a api gateway proxy response to delete cake repository response
 */
export function adaptorCreateCakeRepositoryResponseAPIResponse(
  input: CreateCakeRepositoryResponse,
): LambdaAnyResponse {
  return successfulCakeResponse(input);
}
