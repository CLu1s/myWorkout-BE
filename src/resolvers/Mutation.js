const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

async function signup(parent, args, context, info) {
  // 1
  const password = await bcrypt.hash(args.password, 10)
  // 2
  const user = await context.prisma.createUser({ ...args, password })

  // 3
  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  // 4
  return {
    token,
    user,
  }
}

async function login(parent, args, context, info) {
  // 1
  const user = await context.prisma.user({ email: args.email })
  if (!user) {
    throw new Error('No such user found')
  }

  // 2
  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  // 3
  return {
    token,
    user,
  }
}

function post(parent, args, context, info) {
  return context.prisma.createLink({
    url: args.url,
    description: args.description,
    postedBy: { connect: { id: userId } },
  })
}
function newExcercise(parent, args ,context, info){
  return context.prisma.createExcercise({
    name: args.name,
    bodyPart: args.bodyPart,
  })
}
  
function newWorkout(parent, args ,context, info){
  return context.prisma.createWorkout({
    excercise: { connect: { id: args.excerciseID }},
    weight: args.weight,
    serie: 0,
    maxSerie: args.maxSerie,
    reps: args.reps,
    tempo: args.tempo,
    resTime: args.resTime,
    routine: { connect: { id: args.routineID }},
  })
}

function newRoutine(parent,args,context,info){
  return context.prisma.createRoutine({
    name: args.name,
    description: args.description,
  })
}
function newAthlete(parent,args,context,info){
  return context.prisma.createAthlete({
    name: args.name,
  })
}


module.exports = {
  signup,
  login,
  post,
  newExcercise,
  newWorkout,
  newRoutine,
  newAthlete,
}