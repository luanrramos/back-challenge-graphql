import { GraphQLObjectType, GraphQLSchema } from "graphql";

import { GET_ALL_USERS } from "./Queries/User";
import { CREATE_USER } from "./Mutations/User";

import { GET_ALL_PROJECTS } from "./Queries/Project";
import { CREATE_PROJECT } from "./Mutations/Project";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
    getAllProjects: GET_ALL_PROJECTS,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    CreateUser: CREATE_USER,
    CreateProject: CREATE_PROJECT,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
