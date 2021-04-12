import { DynamoDB } from 'aws-sdk';
import { AdaptorDeleteCakeDBResponseRepositoryResponse } from './Adaptor.DynamoDB.Responses.Respository.Responses';
import { DeleteCakeRepositoryMutation } from './Contract.Repository.Mutations';

export const NewDeleteCakeRepository = (
  table: string,
  db: DynamoDB.DocumentClient,
  adaptor: AdaptorDeleteCakeDBResponseRepositoryResponse,
): DeleteCakeRepositoryMutation => async (id: number) => {
  const { Attributes } = await db
    .delete({ TableName: table, Key: { pk: id } })
    .promise();
  return adaptor(Attributes);
};
