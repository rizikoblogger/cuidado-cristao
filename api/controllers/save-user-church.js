module.exports = {


  friendlyName: 'Save user church',


  description: '',


  inputs: {

    churchId: {type: 'string', required: true},
    userId: {type: 'string', required: true},
    type: {type: 'string', required: true},

  },


  exits: {
    success: {
      description: 'Saved / updated successfuly'
    }

  },


  fn: async function (inputs) {

    await UserChurch.destroy({userId: inputs.userId})

    const userchurch = await UserChurch.create({
      dtAssociation: new Date(),
      churchId: inputs.churchId,
      userId: inputs.churchId,
      type: inputs.type
    }).fetch()

    return userchurch

  }


}
