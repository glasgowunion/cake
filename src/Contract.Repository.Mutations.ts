import { UnsavedCakeEntity } from './Core.Entity.Cake';
import {
  CreateCakeRepositoryResponse,
  DeleteCakeRepositoryResponse,
} from './Contract.Repository.Responses';

/**
 * represents a mutation
 * create and persist a new cake in the store
 */
export type CreateCakeRepositoryMutation = (
  cake: UnsavedCakeEntity,
) => Promise<CreateCakeRepositoryResponse>;

/**
 * represents a mutation
 * delete cake in the store by its id
 */
export type DeleteCakeRepositoryMutation = (
  id: number,
) => Promise<DeleteCakeRepositoryResponse>;
