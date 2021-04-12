### Adjustments

- added an extension to the spec to ensure id''s are at least a value of 1
  i can't think of an id that be a zero value in any persistance store

### Refactors

- refactor mocks module, as these are mean to be plain old objects
  - it makes little sense to use typescript
  - instead just use plain old javascript objects

### Todo

- add caching of yarn packages to github workflow

