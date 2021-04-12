
import { NewCakeEntity } from '../src/Core.Entity.Cake';
import { handler } from '../src/Service.Lambda.DeleteCake';
import { eventToID } from '../src/Adaptor.API.Event.Repository.Parameters';
import { deleteCakeToResponse } from '../src/Adaptor.Repository.Responses.API.Responses';
import { valid } from '../mocks/Core.Cake.Properties';
import { NotFoundRepositoryError } from '../src/Contract.Repository.Errors';

describe('Service.Lambda.DeleteCake > Success', () => {
  it('when requested with an existing id, should 200 respond with the cake that has been deleted', async () => {
    // setup
    const eventWithID: any = { pathParameters: { id: 1 } };
    const repository = async (id: number) => NewCakeEntity(valid);

    // test
    const resp = await handler(
      eventWithID,
      eventToID,
      repository,
      deleteCakeToResponse,
    );
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toBe(JSON.stringify(valid));
  });
});

describe('Service.Lambda.GetCake > Not Found', () => {
  it('when queried with an non existing id, should 404 respond with an error message', async () => {
    // setup
    const eventWithID: any = { pathParameters: { id: 1 } };
    const repository = async (id: number) =>
      new NotFoundRepositoryError("cake with id '1' not found");

    // test
    const resp = await handler(
      eventWithID,
      eventToID,
      repository,
      deleteCakeToResponse,
    );
    expect(resp.statusCode).toBe(404);
  });
});
