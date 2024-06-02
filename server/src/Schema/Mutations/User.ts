import { GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/User";
import { Users } from "../../Entities/Users";

export const CREATE_USER = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { name, email } = args;
    await Users.insert({name, email});
    return args;
  },
};
