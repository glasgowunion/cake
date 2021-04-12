import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';

import { adaptorAPIEventRepositoryCakeParameter } from '../src/Adaptor.API.Event.Repository.Parameters';
import { adaptorCreateCakeRepositoryResponseAPIResponse } from '../src/Adaptor.Repository.Responses.API.Responses';
import { handler as service } from './Service.Lambda.CreateCake';
import { NewCreateCakesRepository } from './Service.Repository.CreateCake';

// config from env vars
const table = process.env.TableName;

// init dynamodb client
const client = new DynamoDB.DocumentClient();

// create a repository for use in the handler
const repo = NewCreateCakesRepository(process.env.TableName, client);

// exported Lambda handler
export const handler = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  return service(
    event,
    adaptorAPIEventRepositoryCakeParameter,
    repo,
    adaptorCreateCakeRepositoryResponseAPIResponse,
  );
};
