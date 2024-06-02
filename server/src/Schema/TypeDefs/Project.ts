import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql'

export const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    price: { type: GraphQLString },
  })
})

