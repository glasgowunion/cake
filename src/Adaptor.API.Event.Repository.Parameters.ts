import { APIGatewayProxyEvent } from 'aws-lambda';
import { NewUnsavedCakePropties, UnsavedCakeEntity } from './Core.Entity.Cake';

/**
 * Types
 */

/**
 * converts api gateway to a cake entity
 */
export type AdaptorAPIEventRepositoryCakeParameter = (
  input: APIGatewayProxyEvent,
) => UnsavedCakeEntity;

/**
 * converts api gateway event to number
 */
export type AdaptorAPIEventRepositoryIDParameter = (
  input: APIGatewayProxyEvent,
) => number;

/**
 * Implementations
 */

/**
 * make a cake from an api gateway proxy event
 * given an input from a api gateway proxy event
 * return an cake
 */
export function eventToCake(event: APIGatewayProxyEvent): UnsavedCakeEntity {
  const { body } = event;

  if (body === null) {
    throw new Error("exception: not expecting body to be empty")
  }

  const cake = JSON.parse(body as string);

  return NewUnsavedCakePropties(cake);
}

/**
 * make a cake id from an api gateway proxy event
 * given an input from a api gateway proxy event
 * return an cake id
 */
export function eventToID(input: APIGatewayProxyEvent): number {

  if (input.pathParameters === null) {
    throw new Error("exception: not expecting body path parameters to be empty")
  }

  const { id } = input.pathParameters;
  return Number(id as string);
}
