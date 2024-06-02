import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type projects {
    id: String
    name: String
    price: String
    user: {
      id: String
      name: String
      email: String
    }


  type user {
    id: String
    name: String
    email: String
  
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "user" query returns an array of zero or more users (defined above).
  type Query {
    books: [Book]
  }
`;

const users = [
  {
    name: 'Luan',
    email: 'luan@gmail.com',
  },
  {
    name: 'lucas',
    email: 'a@gmail.com',
  },
];



// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves users from the "users" array above.
const resolvers = {
  Query: {
    users: () => users,
  },
};