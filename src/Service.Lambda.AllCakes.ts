import { AllCakesLambdaQuery } from './Contract.Lambda.Queries';

export const handler: AllCakesLambdaQuery = async (
  event,
  repository,
  toAPI,
) => {
  const resp = await repository();
  return toAPI(resp);
};
