function routines(parent, args, context) {
  return context.prisma.athlete({ id: parent.id }).routines()
}

module.exports = {
  routines,
}