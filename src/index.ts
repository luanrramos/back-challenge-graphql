import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { User } from "./models/User";
import { v4 } from "uuid";
import { Project } from "./models/Projects";

const typeDefs = `#graphql

  type Project {
    id: String!
    name: String!
    price: Int!
    userId: String!
    User: User
  }

  type User {
    id: String!
    name: String!
    email: String!
    createdAt: String!
    updatedAt: String
  }

  type Query {
    users: [User]
    projects: [Project]
  }

  type Mutation {
    createUser(name: String, email: String): User

    createProject(name: String, price: Int, userId: String): Project
  }
  
`;

const resolvers = {
  Query: {
    users: async () => await User.findAll(),
    projects: async () => {
      User.hasMany(Project);
      Project.belongsTo(User, {});

      const project = await Project.findAll({
        include: {
          all: true,
        },
      });
      return project;
    },
  },
  Mutation: {
    createUser: async (_, data: { name: string; email: string }) => {
      const user = await User.create({
        id: v4(),
        name: data.name,
        email: data.email,
        createdAt: new Date().toISOString(),
      });
      const saved = await user.save();

      return saved;
    },
    createProject: async (
      _,
      data: {
        name: string;
        price: number;
        userId: string;
      }
    ) => {
      Project.belongsTo(User, {});
      const projectId = v4();
      const project = await Project.create(
        {
          id: projectId,
          name: data.name,
          price: data.price,
          userId: data.userId,
        },
        {
          include: User,
        }
      );

      await project.save({});
      const p = await Project.findOne({
        include: User,
        where: {
          id: projectId,
        },
      });
      return p;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
