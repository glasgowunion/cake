import { NewCakeEntity } from '../src/Core.Entity.Cake';
import { handler } from '../src/Service.Lambda.AllCakes';
import { adaptorAllCakesRepositoryResponseAPIResponse } from '../src/Adaptor.Repository.Responses.API.Responses';
import { valid } from '../mocks/Core.Cake.Properties';

describe('Service.Lambda.AllCakes > Success', () => {
  it('when queried should 200 respond with all the cakes', async () => {
    // setup
    const eventWithID: any = {};
    const repository = async () => [NewCakeEntity(valid), NewCakeEntity(valid)];

    // test
    const resp = await handler(
      eventWithID,
      repository,
      adaptorAllCakesRepositoryResponseAPIResponse,
    );
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toBe(JSON.stringify([valid, valid]));
  });
});
