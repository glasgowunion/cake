import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';

import { adaptorDeleteCakeDBResponseRepositoryResponse } from './Adaptor.DynamoDB.Responses.Respository.Responses';
import { adaptorAPIEventRepositoryIDParameter } from '../src/Adaptor.API.Event.Repository.Parameters';
import { adaptorDeleteCakeRepositoryResponseAPIResponse } from '../src/Adaptor.Repository.Responses.API.Responses';
import { handler as service } from './Service.Lambda.DeleteCake';
import { NewDeleteCakeRepository } from './Service.Repository.DeleteCake';

// config from env vars
const table = process.env.TableName;

// init dynamodb client
const client = new DynamoDB.DocumentClient();

// create a repository for use in the handler
const repo = NewDeleteCakeRepository(
  process.env.TableName,
  client,
  adaptorDeleteCakeDBResponseRepositoryResponse,
);

// exported Lambda handler
export const handler = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  return service(
    event,
    adaptorAPIEventRepositoryIDParameter,
    repo,
    adaptorDeleteCakeRepositoryResponseAPIResponse,
  );
};
