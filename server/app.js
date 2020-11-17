const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema/schema');

const app = express();
const PORT = 5300;

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.listen(PORT, (err) => {
  err ? console.error(err) : console.log(`Server started on ${PORT}`);
});
