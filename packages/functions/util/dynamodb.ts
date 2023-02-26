import AWS from "aws-sdk";
import DynamoDB from "aws-sdk/clients/dynamodb";

const client = new AWS.DynamoDB.DocumentClient();

export default {
  get: (params: DynamoDB.DocumentClient.GetItemInput) => client.get(params).promise(),
  put: (params: DynamoDB.DocumentClient.PutItemInput) => client.put(params).promise(),
  query: (params: DynamoDB.DocumentClient.QueryInput) => client.query(params).promise(),
  update: (params: DynamoDB.DocumentClient.UpdateItemInput) => client.update(params).promise(),
  delete: (params: DynamoDB.DocumentClient.DeleteItemInput) => client.delete(params).promise(),
};
