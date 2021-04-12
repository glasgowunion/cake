import { CakeProperties, UnsavedCakeProperties } from './Core.Properties.Cake';
import { CakeSchema, UnsavedCakeSchema } from './Core.Schema.Cake';

/**
 * Cake
 * represents a cake
 */
export type CakeEntity = {
  comment: string;
  id: number;
  imageUrl: string;
  name: string;
  yumFactor: number;
};

/**
 * UnsavedCakeEntity
 * represents the unsaved Entity of our core datatype of a cake that has not been persisted
 */
export type UnsavedCakeEntity = {
  comment: string;
  imageUrl: string;
  name: string;
  yumFactor: number;
};

/**
 * Create a new cake entity
 * cake is validated against its schema
 * an invalid cake returns an error
 * @param cake - cake object
 * @returns
 */
export function NewCakeEntity(cake: CakeProperties): CakeEntity {
  if (!cake) {
    throw new Error('cake object should be defined');
  }

  const { error } = CakeSchema.validate(cake);

  if (error) {
    throw error;
  }

  return cake;
}

/**
 * Create a new cake entity
 * cake is validated against its schema for an unsave cake
 * an invalid cake returns an error
 * @param cake - cake object
 * @returns
 */
export function NewUnsavedCakePropties(
  cake: UnsavedCakeProperties,
): UnsavedCakeEntity {
  if (!cake) {
    throw new Error('cake object should be defined');
  }

  const { error } = UnsavedCakeSchema.validate(cake);

  if (error) {
    throw error;
  }

  return cake;
}
