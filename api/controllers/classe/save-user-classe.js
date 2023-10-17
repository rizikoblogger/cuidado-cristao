module.exports = {


  friendlyName: 'Save user classe',


  description: '',


  inputs: {
    userId: {type: 'string', required: true},
    classroomId: {type: 'string', required: true},
  },


  exits: {},


  fn: async function (inputs) {

    let list = []
    list.push(inputs.userId)
    const classRoom = await Classroom.addToCollection(inputs.classroomId, 'users').members(list)
    return {}

  }


}
