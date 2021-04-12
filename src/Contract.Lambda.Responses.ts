export interface LambdaAnyResponse {
  statusCode: number;
  body: string;
}

export interface LambdaFailResponse {
  statusCode: 500;
  body: string;
}

export interface LambdaNotFoundResponse {
  statusCode: 404;
  body: string;
}

export interface LambdaSuccessResponse {
  statusCode: 200;
  body: string;
}

export interface LambdaSuccessButResourceEmpty {
  statusCode: 204;
  body: string;
}
