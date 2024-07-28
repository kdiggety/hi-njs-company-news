const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { resolvers } = require('../graphql-server/resolver')
const { typeDefs } = require('../graphql-server/schema')

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
async function startApolloServer() {
    const server= new ApolloServer({ typeDefs, resolvers, });
    const { url } = await startStandaloneServer(server);
    console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

startApolloServer();