// import express from 'express';
const {GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./src/generated/prisma-client')
// import bodyParser from 'body-parser';

const Query = require('./src/resolvers/Query')
const Mutation = require('./src/resolvers/Mutation')
const User = require('./src/resolvers/User')
const Link = require('./src/resolvers/Link')

// const app = express();
const port = process.env.PORT || 4000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
// app.get('/api/v1/hello', (req, res) => {
//   res.status(200).send({
//     success: 'true',
//     todos: { express: 'Hello From Express' }
//   })
// });

// app.post('/api/world', (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// });

// app.listen(port, () => console.log(`Listening on port ${port}`));

const resolvers = {
  Query,
  Mutation,
  User,
  Link
}

// 3
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
})

server.start({port: port},() => console.log(`Server is running on http://localhost:${port}`))
