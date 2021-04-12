import { CreateCakeLambdaMutation } from './Contract.Lambda.Mutations';

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
