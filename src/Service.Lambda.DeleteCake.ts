import { DeleteCakeLambdaMutation } from './Contract.Lambda.Mutations';

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
