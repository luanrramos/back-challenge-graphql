import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { User } from "./models/User";
import { v4 } from "uuid";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Project {
    name: String
    price: String
   
  }

  type User {
    id: String!
    name: String!
    email: String!
    createdAt: String!
    updatedAt: String!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "user" query returns an array of zero or more users (defined above).

  type Query {
    users: [User]
  }

  type Mutation {
    createUser(name: String, email: String): User
  }
`;

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves users from the "users" array above.
const resolvers = {
  Query: {
    users: async () => await User.findAll(),
  },
  Mutation: {
    createUser: async (_, data: { name: string; email: string }) => {
      const user = await User.create({
        id: v4(),
        name: data.name,
        email: data.email,
        createdAt: new Date().toISOString(),
      });
      const saved = await user.save();

      return saved;
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
