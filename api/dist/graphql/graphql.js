"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_graphql_1 = require("express-graphql");
const graphql_1 = require("graphql");
const steps_1 = require("./steps/steps");
const schema = graphql_1.buildSchema(`
    type Query {
        getSteps: Int
    }

    type Mutation {
        setSteps: Int
    }
`);
let test = 0;
const root = {
    getSteps: steps_1.getSteps,
    setSteps: steps_1.setSteps
};
const graphql = express_graphql_1.graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
});
exports.default = graphql;
//# sourceMappingURL=graphql.js.map