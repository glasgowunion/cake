import { DynamoDB } from 'aws-sdk';
import { AdaptorGetCakeDBResponseRepositoryResponse } from './Adaptor.DynamoDB.Responses.Respository.Responses';
import { GetCakeRepositoryQuery } from './Contract.Repository.Queries';

export const NewGetCakeRepository = (
  table: string,
  db: DynamoDB.DocumentClient,
  adaptor: AdaptorGetCakeDBResponseRepositoryResponse,
): GetCakeRepositoryQuery => async (id: number) => {
  const { Item } = await db
    .get({ TableName: table, Key: { pk: id } })
    .promise();
  return adaptor(Item);
};
