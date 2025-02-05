import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// typeDef is a interface
const typeDefs = `#graphql 
  type Query {
    greeting: String
  }
`;

// resolvers is implementation
const resolvers = {
  Query: {
    greeting: () => 'Hello world-111',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, { listen: { port: 9000 } });
console.log(`Server running at ${url}`);
