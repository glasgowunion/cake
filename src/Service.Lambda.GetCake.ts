import { GetCakeLambdaQuery } from './Contract.Lambda.Queries';

export const handler: GetCakeLambdaQuery = async (
  event,
  toRepository,
  repository,
  toAPI,
) => {
  const id = toRepository(event);
  const resp = await repository(id);
  return toAPI(resp);
};
