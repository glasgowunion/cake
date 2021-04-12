import { APIGatewayProxyEvent } from 'aws-lambda';
import { logger } from 'aws-log';

export interface LambdaLogger {
  log: (message: string, params?: any) => any;
  error: (message: string, params?: any) => any;
}

export type LambdaLoggerFactory = (
  event: APIGatewayProxyEvent,
  context: any,
) => LambdaLogger;

/**
 * Create a new logger for use in Lambdas
 */
export function NewLogger(
  event: APIGatewayProxyEvent,
  context: any,
): LambdaLogger {
  return logger().lambda(event, context);
}
