import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

import { getSteps, setSteps } from "./steps/steps";
import { getMoney, setMoney } from "./money/money";

const schema = buildSchema(`
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
    getSteps: getSteps,

    setSteps: setSteps,

    getMoney: getMoney,

    setMoney: setMoney
}

export default graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
});