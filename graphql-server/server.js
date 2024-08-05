const { ApolloServer } = require('apollo-server');
const { buildSubgraphSchema } = require('@apollo/subgraph');
const { resolvers } = require('./resolver')
const { typeDefs } = require('./schema')

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
async function startApolloServer() {
    const server= new ApolloServer({
        schema: buildSubgraphSchema({ typeDefs, resolvers })
    });
    server.listen(4001).then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    });
}

startApolloServer();