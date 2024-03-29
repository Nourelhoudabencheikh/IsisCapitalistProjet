const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const world = require('./world');
const fs = require('fs').promises;

// Initialize the app
const app = express();

async function readUserWorld(user) {
  try {
    const data = await fs.readFile(`userworlds/${user}-world.json`);
    return JSON.parse(data);
  } catch (error) {
    console.log(error)
    return world;
  }
}

// Middleware for serving static files
app.use(express.static('public'));

// Provide resolver functions for your schema fields
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs, resolvers,
  context: async ({ req }) => ({
  world: await readUserWorld(req.headers["x-user"]),
  user: req.headers["x-user"]
  })
 });

server.start().then(res => {
  server.applyMiddleware({ app });
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});