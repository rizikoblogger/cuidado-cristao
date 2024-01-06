module.exports = {


  friendlyName: 'Remove user classe',


  description: '',


  inputs: {
    userId: {type: 'string', required: true},
    classroomId: {type: 'string', required: true},
  },


  exits: {

  },


  fn: async function (inputs) {

    let list = []
    list.push(inputs.userId)
    await Classroom.removeFromCollection(inputs.classroomId, 'users').members(list)

    const classroom = await Classroom.findOne({id: inputs.classroomId})

    return {classroom}

  }


}
