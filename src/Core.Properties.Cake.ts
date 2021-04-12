/**
 * CakeProperties
 * represents the properties of our core datatype of a cake
 *
 * @member {string} comment - represents a user comment for the cake
 * @member {string} id - represents a numeric id used to uniquely identify a cake
 * @member {string} imageUrl - represents link to a web url used to resolve an image
 * @member {string} name - represents a cake name
 * @member {string} yumFactor - represents represent how yummy a cake is on a scale of 1-5
 */
export interface CakeProperties {
  comment: string;
  id: number;
  imageUrl: string;
  name: string;
  yumFactor: number;
}

/**
 * UnsavedCakeProperties
 * represents the properties of our core datatype of a cake that has not been persisted
 *
 * @member {string} comment - represents a user comment for the cake
 * @member {string} imageUrl - represents link to a web url used to resolve an image
 * @member {string} name - represents a cake name
 * @member {string} yumFactor - represents represent how yummy a cake is on a scale of 1-5
 */
export interface UnsavedCakeProperties {
  comment: string;
  imageUrl: string;
  name: string;
  yumFactor: number;
}
