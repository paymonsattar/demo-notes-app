import { APIGatewayProxyEvent } from "aws-lambda";
import DynamoDB from "aws-sdk/clients/dynamodb";
import handler from "../util/handler";
import dynamoDb from "../util/dynamodb";

export const main = handler(async (event: APIGatewayProxyEvent) => {
  const params: DynamoDB.DocumentClient.GetItemInput = {
    TableName: process.env.TABLE_NAME || '',
    Key: {
      userId: event.requestContext.authorizer?.iam.cognitoIdentity.identityId, // The id of the author
      noteId: event.pathParameters?.id ?? "" // The id of the note from the path
    }
  };
  

  const result = await dynamoDb.get(params);
  if (!result.Item) {
    throw new Error("Item not found.");
  }

  // Return the retrieved item
  return result.Item;
});