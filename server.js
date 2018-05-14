import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './graphql';
import mongoose from 'mongoose';

const app = express();

// GraphQL server route
app.use('/graphql', graphqlHTTP(req => ({
  schema,
  pretty: true
})));

// Connect to mongo database
mongoose.connect('mongodb://mongo/graphql');

//start server
const server = app.listen(8082, () => {
  console.log(`Listening at port ${server.address().port}`);
});
