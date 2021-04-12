import { DynamoDB } from 'aws-sdk';
import { AdaptorAllCakesDynamoDBResponseRepositoryResponse } from './Adaptor.DynamoDB.Responses.Respository.Responses';
import { AllCakesRepositoryQuery } from './Contract.Repository.Queries';

export const NewAllCakesRepository = (
  table: string,
  db: DynamoDB.DocumentClient,
  adaptor: AdaptorAllCakesDynamoDBResponseRepositoryResponse,
): AllCakesRepositoryQuery => async () => {
  const { Items } = await db.scan({ TableName: table }).promise();
  return adaptor(Items);
};
