import {
  AllCakesRepositoryResponse,
  GetCakeRepositoryResponse,
} from './Contract.Repository.Responses';

/**
 * represents a query
 * retrieves a cake by its id
 */
export type GetCakeRepositoryQuery = (
  id: number,
) => Promise<GetCakeRepositoryResponse>;

/**
 * represents a query
 * retrieves all cakes
 */
export type AllCakesRepositoryQuery = () => Promise<AllCakesRepositoryResponse>;
