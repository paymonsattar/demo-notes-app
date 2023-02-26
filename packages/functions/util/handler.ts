import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export default function handler(lambda: any): APIGatewayProxyHandlerV2 {
  return async function (event: any, context: any) {
    let body, statusCode;

    try {
      // Run the Lambda
      body = await lambda(event, context);
      statusCode = 200;
    } catch (ev: any) {
      console.error(ev);
      body = { error: ev.message };
      statusCode = 500;
    }

    // Return HTTP response
    return {
      statusCode,
      body: JSON.stringify(body),
    };
  };
}