import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      "name": "notes",
      "region": "eu-west-1",
      "main": "stacks/index.js"
    };
  },
  stacks(app) {    
    app.stack(API)
  },
} satisfies SSTConfig;
