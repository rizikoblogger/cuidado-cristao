module.exports = {


  friendlyName: 'Save user church',


  description: '',


  inputs: {
    userId: {type: 'string'},
    churchId: {type: 'string'}
  },


  exits: {

  },


  fn: async function (inputs) {

    const user = await User.updateOne({id: inputs.userId}, {church: inputs.churchId})
    return {user}

  }


};
