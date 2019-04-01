function excercise(parent, args, context) {
  return context.prisma.workout({ id: parent.id }).excercise()
}
function routine(parent, args, context) {
  return context.prisma.workout({ id: parent.id }).routine()
}
module.exports = {
  excercise,
  routine,
}