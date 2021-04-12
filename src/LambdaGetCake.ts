import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';

import { adaptorGetCakeDBResponseRepositoryResponse } from './Adaptor.DynamoDB.Responses.Respository.Responses';
import { adaptorAPIEventRepositoryIDParameter } from '../src/Adaptor.API.Event.Repository.Parameters';
import { adaptorGetCakeRepositoryResponseAPIResponse } from '../src/Adaptor.Repository.Responses.API.Responses';
import { handler as service } from './Service.Lambda.GetCake';
import { NewGetCakeRepository } from './Service.Repository.GetCake';

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
const repo = NewGetCakeRepository(
  config(),
  client,
  adaptorGetCakeDBResponseRepositoryResponse,
);

// exported Lambda handler
export const handler = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  return service(
    event,
    adaptorAPIEventRepositoryIDParameter,
    repo,
    adaptorGetCakeRepositoryResponseAPIResponse,
  );
};
