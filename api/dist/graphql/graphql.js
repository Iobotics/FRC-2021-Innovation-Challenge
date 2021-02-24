"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_graphql_1 = require("express-graphql");
const graphql_1 = require("graphql");
const steps_1 = require("./steps/steps");
const money_1 = require("./money/money");
const schema = graphql_1.buildSchema(`
    type Query {
        getSteps: Int

        getMoney: Int
    }

    type Mutation {
        setSteps(amount: Int!) : Int

        setMoney(amount: Int!): Int
    }
`);
const root = {
    getSteps: steps_1.getSteps,
    setSteps: steps_1.setSteps,
    getMoney: money_1.getMoney,
    setMoney: money_1.setMoney
};
exports.default = express_graphql_1.graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
});
//# sourceMappingURL=graphql.js.map