// example of a valid object
// this would pass the tsc typechecker and the schema
const valid = {
  id: 1,
  name: 'mock cake',
  comment: 'this is a delicious mock cake',
  imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
  yumFactor: 5,
};

// this is an invalid cake object
// this would pass the tsc typechecker but not the schema
const invalidDefault = {
  comment: '',
  id: 0,
  imageUrl: '',
  name: '',
  yumFactor: 0,
};

// this is an invalid cake object
// we are assuming that ids cant be zero
const invalidZeroID = { ...valid, id: 0 };

export { invalidDefault, invalidZeroID, valid };
