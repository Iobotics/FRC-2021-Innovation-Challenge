import express from "express";

import graphql from "./graphql/graphql";

const app = express();

app.use('/graphql', graphql);

app.listen(4000);
console.log("Started")