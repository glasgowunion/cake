/**
 * represents an apigw response with any status code
 */
export interface LambdaAnyResponse {
  statusCode: number;
  body: string;
}

/**
 * represents an apigw failure response
 */
export interface LambdaFailResponse {
  statusCode: 500;
  body: string;
}

/**
 * represents an apigw response for http 404 not found
 */
export interface LambdaNotFoundResponse {
  statusCode: 404;
  body: string;
}

/**
 * represents a successful apigw response
 */
export interface LambdaSuccessResponse {
  statusCode: 200;
  body: string;
}

/**
 * represents a 204 apigw response - request successful by no resource present
 */
export interface LambdaSuccessButResourceEmpty {
  statusCode: 204;
  body: string;
}
