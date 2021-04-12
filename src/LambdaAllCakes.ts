import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';

import { adaptorAllCakesDynamoDBResponseRepositoryResponse } from './Adaptor.DynamoDB.Responses.Respository.Responses';
import { adaptorAllCakesRepositoryResponseAPIResponse } from '../src/Adaptor.Repository.Responses.API.Responses';
import { handler as service } from './Service.Lambda.AllCakes';
import { NewAllCakesRepository } from './Service.Repository.AllCakes';

import { NewLogger } from './Contract.Lambda.Logger';

// config from env vars
const config = () => {
  if (!process.env.TableName) {
    throw new Error('please setup your env variables');
  }
  return process.env.TableName;
};

// init dynamodb client
const client = new DynamoDB.DocumentClient();

// create a repository for use in the handler
const repo = NewAllCakesRepository(
  config(),
  client,
  adaptorAllCakesDynamoDBResponseRepositoryResponse,
);

// exported Lambda handler
export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> => {
  NewLogger(event, context).log('All Cakes');
  return service(event, repo, adaptorAllCakesRepositoryResponseAPIResponse);
};
