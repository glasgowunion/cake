import { NewCakeEntity } from '../src/Core.Entity.Cake';
import { handler } from '../src/Service.Lambda.CreateCake';
import { eventToCake } from '../src/Adaptor.API.Event.Repository.Parameters';
import { createCakeToResponse } from '../src/Adaptor.Repository.Responses.API.Responses';
import { valid, validWithoutID } from '../mocks/Core.Cake.Properties';

describe('Service.Lambda.CreateCakes > Success', () => {
  it('when queried should 200 respond with the newly created the cake', async () => {
    // setup
    const eventWithCake: any = {
      body: JSON.stringify(validWithoutID),
    };
    const repository = async () => NewCakeEntity(valid);

    // test
    const resp = await handler(
      eventWithCake,
      eventToCake,
      repository,
      createCakeToResponse,
    );
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toBe(JSON.stringify(valid));
  });
});
