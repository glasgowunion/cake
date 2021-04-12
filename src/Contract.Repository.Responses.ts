import { CakeEntity } from './Core.Entity.Cake';
import {
  EmptyRepositoryError,
  NotFoundRepositoryError,
} from './Contract.Repository.Errors';

/**
 * Response types for repository
 * these response types are specifically
 * designed for use in adaptors
 */

export type AllCakesRepositoryResponse = CakeEntity[] | EmptyRepositoryError;
export type CreateCakeRepositoryResponse = CakeEntity;
export type DeleteCakeRepositoryResponse = CakeEntity | NotFoundRepositoryError;
export type GetCakeRepositoryResponse = CakeEntity | NotFoundRepositoryError;
