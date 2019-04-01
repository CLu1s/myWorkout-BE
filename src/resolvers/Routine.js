function workouts(parent, args, context) {
  return context.prisma.routine({ id: parent.id }).workouts()
}
module.exports = {
  workouts,
}