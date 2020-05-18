const { ApolloServer, gql } = require("apollo-server");

// 1. definition
// - 1.1 schema (template literal tagged with gql funcyion)
const typeDefs = gql`
  schema {
    query: Query
  }

  type Query {
    greeting: String
  }
`;
// - 1.2 resolver OBJECT
const resolvers = {
  Query: {
    greeting: () => "Hello from GraphQL",
  },
};

// 2. server
const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen({ port: 3300 })
  .then(({ url }) => console.log(`Apollo Server is running at ${url}...`));
