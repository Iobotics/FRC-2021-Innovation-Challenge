import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

import { getSteps, setSteps } from "./steps/steps";

const schema = buildSchema(`
    type Query {
        getSteps: Int
    }

    type Mutation {
        setSteps: Int
    }
`);

let test = 0;

const root = {
    getSteps: getSteps,

    setSteps: setSteps
}

const graphql = graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
});

export default graphql;