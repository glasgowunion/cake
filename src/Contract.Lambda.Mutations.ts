import { APIGatewayProxyEvent } from 'aws-lambda';
import {
  AdaptorAPIEventRepositoryCakeParameter,
  AdaptorAPIEventRepositoryIDParameter,
} from './Adaptor.API.Event.Repository.Parameters';
import {
  AdaptorCreateCakeRepositoryResponseAPIResponse,
  AdaptorDeleteCakeRepositoryResponseAPIResponse,
} from './Adaptor.Repository.Responses.API.Responses';
import { LambdaAnyResponse } from './Contract.Lambda.Responses';
import {
  CreateCakeRepositoryMutation,
  DeleteCakeRepositoryMutation,
} from './Contract.Repository.Mutations';

/**
 * represents a handler to get all cakes from the api
 * returns a aws api gateway proxy return type
 */
export type CreateCakeLambdaMutation = (
  event: APIGatewayProxyEvent,
  toRepository: AdaptorAPIEventRepositoryCakeParameter,
  repository: CreateCakeRepositoryMutation,
  toAPI: AdaptorCreateCakeRepositoryResponseAPIResponse,
) => Promise<LambdaAnyResponse>;

/**
 * represents a handler to get a single cake by id
 * returns a aws api gateway proxy return type
 */
export type DeleteCakeLambdaMutation = (
  event: APIGatewayProxyEvent,
  toRepository: AdaptorAPIEventRepositoryIDParameter,
  repository: DeleteCakeRepositoryMutation,
  toAPI: AdaptorDeleteCakeRepositoryResponseAPIResponse,
) => Promise<LambdaAnyResponse>;
