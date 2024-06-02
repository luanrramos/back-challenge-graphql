import { GraphQLString } from "graphql";
import { ProjectType } from "../TypeDefs/Project";
import { Projects } from "../../Entities/Projects";

export const CREATE_PROJECT = {
  type: ProjectType,
  args: {
    name: { type: GraphQLString },
    price: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { name, price } = args;
    await Projects.insert({ name, price });
    return args;
  },
};
