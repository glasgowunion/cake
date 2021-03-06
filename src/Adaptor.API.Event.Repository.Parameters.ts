import { APIGatewayProxyEvent } from 'aws-lambda';
import { NewUnsavedCakePropties, UnsavedCakeEntity } from './Core.Entity.Cake';
import { CakeIDSchema } from './Core.Schema.Cake';

/**
 * Convert API Gateway event into repository parameers
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
 * make a cake from an api gateway proxy event
 * given an input from a api gateway proxy event
 * return an cake
 */
export function adaptorAPIEventRepositoryCakeParameter(
  event: APIGatewayProxyEvent,
): UnsavedCakeEntity {
  const { body } = event;

  if (body === null) {
    throw new Error('exception: not expecting body to be empty');
  }

  const cake = JSON.parse(body as string);

  return NewUnsavedCakePropties(cake);
}

/**
 * make a cake id from an api gateway proxy event
 * given an input from a api gateway proxy event
 * return an cake id
 */
export function adaptorAPIEventRepositoryIDParameter(
  input: APIGatewayProxyEvent,
): number {
  if (input.pathParameters === null) {
    throw new Error(
      'exception: not expecting body path parameters to be empty',
    );
  }

  const { error } = CakeIDSchema.validate(input.pathParameters);

  if (error) {
    throw error;
  }

  const { id } = input.pathParameters;

  return Number(id as string);
}
