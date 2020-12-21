const express = require("express");
const {ApolloServer, gql} = require("apollo-server-express");
const functions = require('firebase-functions');

const {importSchema}  = require("graphql-import");
const resolvers = require('./resolvers'); 

const app = express();
const server = new ApolloServer({
      typeDefs:importSchema('./schema/index.graphql'),
      resolvers:resolvers,
      cors:true
});

server.applyMiddleware({app, path:"/", cors:true});

exports.graphql = functions.https.onRequest(app);