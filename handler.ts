// handler.ts
import { APIGatewayEvent, Context, APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const hello : APIGatewayProxyHandler = async (event : APIGatewayEvent, context : Context) => {
  console.log(context);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }, null, 2),
  };
}