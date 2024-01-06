module.exports = {


  friendlyName: 'Save user classe',


  description: '',


  inputs: {
    userId: {type: 'string', required: true},
    classroomId: {type: 'string', required: true},
  },


  exits: {},


  fn: async function (inputs) {

    const lista = []
    lista.push(inputs.classroomId)

    await User.addToCollection(inputs.userId, `classrooms`).members(lista)

    const user = await User.findOne({id: inputs.userId})

    return {user}

  }


}
