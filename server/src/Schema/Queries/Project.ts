import { ProjectType } from "../TypeDefs/Project";
import { GraphQLList } from "graphql";

export const GET_ALL_PROJECTS = {
  type: new GraphQLList(ProjectType),
  resolver() {
    return [];
  },
};
