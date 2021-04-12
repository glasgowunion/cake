import Joi from 'joi';

// build a schema to validate a CakeProperties
export const CakeSchema = Joi.object({
  comment: Joi.string().min(3).max(200).required(),
  id: Joi.number().min(1).required(),
  imageUrl: Joi.string().uri().required(),
  name: Joi.string().min(3).max(30).required(),
  yumFactor: Joi.number().min(1).max(5).required(),
});

// build a schema to validate a UnsavedCakeProperties
export const UnsavedCakeSchema = Joi.object({
  comment: Joi.string().min(3).max(200).required(),
  imageUrl: Joi.string().uri().required(),
  name: Joi.string().min(3).max(30).required(),
  yumFactor: Joi.number().min(1).max(5).required(),
});
