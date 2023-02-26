import * as uuid from "uuid";
import { APIGatewayProxyEvent } from "aws-lambda";
import handler from "../util/handler";
import dynamoDb from "../util/dynamodb";

export const main = handler(async (event: APIGatewayProxyEvent) => {
  if (!event || !event.body) {
    return
  }

  const body = JSON.parse(event.body)

  const params = {
    TableName: process.env.TABLE_NAME || '',
    Item: {
      // The attributes of the item to be created
      userId: event.requestContext.authorizer?.iam.cognitoIdentity.identityId, // The id of the author
      noteId: uuid.v1(), // A unique uuid
      content: body.content, // Parsed from request body
      attachment: body.attachment, // Parsed from request body
      createdAt: Date.now(), // Current Unix timestamp
    },
  };

  await dynamoDb.put(params);

  return params.Item;
});