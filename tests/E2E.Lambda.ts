import fetch from 'node-fetch';

import { validWithoutID } from '../mocks/Core.Cake.Properties';

// set a long timeout for this test
jest.setTimeout(20000);

// api endpoint
const url =
  'https://finsurucq3.execute-api.eu-west-1.amazonaws.com/stage/cakes';

// wrapper to make composing requests a little easier
const $ = async (url: string, request: any) => {
  const r = await fetch(url, request);
  return { status: r.status, body: await r.json() };
};

const allCakes = async () =>
  $(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

const createCake = async () =>
  $(url, {
    method: 'POST',
    body: JSON.stringify(validWithoutID),
    headers: {
      'Content-Type': 'application/json',
    },
  });

const deleteCake = async (id: number) =>
  $(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

const getCake = async (id: number) =>
  $(`${url}/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

describe('A Set Of APIGW requests, sequentially run', () => {
  it('should create a cake, get the same cake, find it in all cakes,then delete it and confirm its deleted', async () => {
    let cc = await createCake();
    expect(cc.status).toBe(200);

    let gc = await getCake(cc.body.id);
    expect(gc.status).toBe(200);

    let dc = await deleteCake(cc.body.id);
    expect(dc.status).toBe(200);

    let ac = await allCakes();
    expect(ac.status).toBe(200);

    let gcRetry = await getCake(cc.body.id);
    expect(gcRetry.status).toBe(404);
  });
});
