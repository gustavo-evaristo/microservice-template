import 'reflect-metadata';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import { config } from 'dotenv';
import { buildSchema } from 'type-graphql';
import { SimpleResolver } from '~/resolvers/simple';

config({
  path: process.env.NODE_ENV === 'PRD' ? '.env.production' : '.env.dev',
});

const port = process.env.PORT || 3000;

const main = async () => {
  const schema = await buildSchema({
    resolvers: [SimpleResolver],
    emitSchemaFile: path.join(__dirname, '..', 'schema.gql'),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen(port);

  console.log(`server running on ${url}`);
};

main();
