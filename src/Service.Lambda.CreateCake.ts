import { CreateCakeLambdaMutation } from './Contract.Lambda.Mutations';

/**
 * implements a handler to get all cakes from the api returns a aws api gateway proxy return type
 * @param event - apigw event
 * @param toRepository - adaptor - event to repository parameter
 * @param repository - service repository
 * @param toAPI adaptor - repository response to repository apigw response
 * @returns
 */
export const handler: CreateCakeLambdaMutation = async (
  event,
  toRepository,
  repository,
  toAPI,
) => {
  const cake = toRepository(event);
  const resp = await repository(cake);
  return toAPI(resp);
};
