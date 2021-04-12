import { APIGatewayProxyEvent } from 'aws-lambda';
import { AdaptorAPIEventRepositoryIDParameter } from './Adaptor.API.Event.Repository.Parameters';
import {
  AdaptorAllCakesRepositoryResponseAPIResponse,
  AdaptorGetCakeRepositoryResponseAPIResponse,
} from './Adaptor.Repository.Responses.API.Responses';
import { LambdaAnyResponse } from './Contract.Lambda.Responses';
import {
  AllCakesRepositoryQuery,
  GetCakeRepositoryQuery,
} from './Contract.Repository.Queries';

/**
 * represents a handler to get all cakes from the api
 * returns a aws api gateway proxy return type
 */
export type AllCakesLambdaQuery = (
  event: APIGatewayProxyEvent,
  repository: AllCakesRepositoryQuery,
  toAPI: AdaptorAllCakesRepositoryResponseAPIResponse,
) => Promise<LambdaAnyResponse>;

/**
 * represents a handler to get a single cake by id
 * returns a aws api gateway proxy return type
 */
export type GetCakeLambdaQuery = (
  event: APIGatewayProxyEvent,
  toRepository: AdaptorAPIEventRepositoryIDParameter,
  repository: GetCakeRepositoryQuery,
  toAPI: AdaptorGetCakeRepositoryResponseAPIResponse,
) => Promise<LambdaAnyResponse>;
