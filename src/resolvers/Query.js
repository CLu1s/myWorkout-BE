function feed(parent, args, context, info) {
  return context.prisma.links()
}

function excercises(parent, args, context, info){
  return context.prisma.excercises();
}

function workouts(parent,args,context,info){
  return context.prisma.workouts();
}

function routines(parent,args,context,info){
  return context.prisma.routines();
}

function athletes(parent,args,context,info){
  return context.prisma.athletes()
}

module.exports = {
  feed,
  excercises,
  workouts,
  routines,
  athletes,
}