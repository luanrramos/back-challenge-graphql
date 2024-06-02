import { ProjectType } from "../TypeDefs/Project";
import { GraphQLList } from "graphql";
import { Projects } from '../../Entities/Projects'

export const GET_ALL_PROJECTS = {
  type: new GraphQLList(ProjectType),
  resolver() {
    return Projects.find();
  },
};
