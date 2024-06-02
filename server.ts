import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    helloWorld: String!
  }

  type Mutation {
    createUser(name: String!): String!
  }
  type Projects {
    id: ID
    name: String
    email: String
    price: String
  }
`;


const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      helloWorld: () => {
        return "Hello World";
      },
      Mutation:{
        createUser: () =>{
          
        }
      }
    },
  },
});

server.listen().then(({ url }) => {
  console.log(`HTTP server running on ${url}`);
});
