import Joi from 'joi';

/**
 * Cake entity
 * represents our core datatype of a cake
 *
 * @member {string} comment - represents a user comment for the cake
 * @member {string} id - represents a numeric id used to uniquely identify a cake
 * @member {string} imageUrl - represents link to a web url used to resolve an image
 * @member {string} name - represents a cake name
 * @member {string} yumFactor - represents represent how yummy a cake is on a scale of 1-5
 */
export interface CakeType {
  comment: string;
  id: number;
  imageUrl: string;
  name: string;
  yumFactor: number;
}

// build a schema to validate a CakeType
export const schema = Joi.object({
  comment: Joi.string().min(3).max(200).required(),
  id: Joi.number().min(1).required(),
  imageUrl: Joi.string().uri().required(),
  name: Joi.string().min(3).max(30).required(),
  yumFactor: Joi.number().min(1).max(5).required(),
});

/**
 * Create a new Cake
 * cake is validated against its schema
 * an invalid cake returns an error
 * @param cake - cake object
 * @returns
 */
export function Cake(cake: CakeType): CakeType {
  if (!cake) {
    throw new Error('cake object should be defined');
  }

  const { error } = schema.validate(cake);

  if (error) {
    throw error;
  }

  return cake;
}
