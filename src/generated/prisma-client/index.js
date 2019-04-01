"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Link",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Excercise",
    embedded: false
  },
  {
    name: "Routine",
    embedded: false
  },
  {
    name: "Workout",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/jose-luis-a24843/myWorkout/dev`
});
exports.prisma = new exports.Prisma();
