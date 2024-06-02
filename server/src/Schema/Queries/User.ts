import { UserType } from "../TypeDefs/User";
import { GraphQLList } from "graphql";
import { Users } from '../../Entities/Users'

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolver() {
    return Users.find();
  },
};
