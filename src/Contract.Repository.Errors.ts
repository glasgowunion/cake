/**
 * represents a not found error
 * returned when an entity cant be found by the repository provider
 */
export class NotFoundRepositoryError extends Error {}

/**
 * represents an empty error
 * returned when an there are no resources in the database
 */
export class EmptyRepositoryError extends Error {}
