import { GraphQLString } from "graphql";
import { ProjectType } from "../TypeDefs/Project";

export const CREATE_PROJECT = {
  type: ProjectType,
  args: {
    name: { type: GraphQLString },
    price: { type: GraphQLString },
  },
  resolver(parent: any, args: any) {
      const { name, price } = args
      
  }
};
