import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';

import { adaptorAllCakesDynamoDBResponseRepositoryResponse } from './Adaptor.DynamoDB.Responses.Respository.Responses';
import { adaptorAllCakesRepositoryResponseAPIResponse } from '../src/Adaptor.Repository.Responses.API.Responses';
import { handler as service } from './Service.Lambda.AllCakes';
import { NewAllCakesRepository } from './Service.Repository.AllCakes';

// config from env vars
const table = process.env.TableName;

// init dynamodb client
const client = new DynamoDB.DocumentClient();

// create a repository for use in the handler
const repo = NewAllCakesRepository(
  process.env.TableName,
  client,
  adaptorAllCakesDynamoDBResponseRepositoryResponse,
);

// exported Lambda handler
export const handler = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  return service(event, repo, adaptorAllCakesRepositoryResponseAPIResponse);
};
