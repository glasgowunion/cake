import { AllCakesLambdaQuery } from './Contract.Lambda.Queries';

/**
 * implements a handler to get all cakes from the api returns a aws api gateway proxy return type
 * @param event - apigw event
 * @param repository - service repository
 * @param adaptor - repository lambda service adaptor 
 * @returns 
 */
export const handler: AllCakesLambdaQuery = async (
  event,
  repository,
  adaptor,
) => {
  const resp = await repository();
  return adaptor(resp);
};
