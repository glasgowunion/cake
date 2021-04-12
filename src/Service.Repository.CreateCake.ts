import { DynamoDB } from 'aws-sdk';
import { CreateCakeRepositoryMutation } from './Contract.Repository.Mutations';
import { NewCakeEntity, UnsavedCakeEntity } from './Core.Entity.Cake';

// naive numeric id generator
// if we were using dyncamodb in production
// we would use one of the uuid generators
// to create a uuid as a string
const gen = () => new Date().getTime() + Math.ceil(Math.random() * 100000000);

export const NewCreateCakesRepository = (
  table: string,
  db: DynamoDB.DocumentClient,
): CreateCakeRepositoryMutation => async (cake: UnsavedCakeEntity) => {
  const item = { ...cake, id: gen() };
  await db.put({ TableName: table, Item: item }).promise();
  return NewCakeEntity(item);
};
