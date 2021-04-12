import { DeleteCakeLambdaMutation } from './Contract.Lambda.Mutations';

/**
 * implements a handler to delete a single cake by id returns a aws api gateway proxy return type
 * @param event - apigw event
 * @param toRepository - adaptor - event to repository parameter
 * @param repository - service repository
 * @param toAPI adaptor - repository response to repository apigw response
 * @returns 
 */
export const handler: DeleteCakeLambdaMutation = async (
  event,
  toRepository,
  repository,
  toAPI,
) => {
  const id = toRepository(event);
  const resp = await repository(id);
  return toAPI(resp);
};
