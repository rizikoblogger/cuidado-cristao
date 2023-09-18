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

    const exist = (await UserChurch.find({userId: inputs.userId, churchId: inputs.churchId})).size > 0;

    if(exist){
      const userchurch = await UserChurch.updateOne({userId: inputs.userId, churchId: inputs.churchId} ,{
        churchId: inputs.churchId,
        userId: inputs.churchId,
        type: inputs.type
      });
    }else{
      const userchurch = await UserChurch.create({
        dtAssociation: new Date(),
        churchId: inputs.churchId,
        userId: inputs.churchId,
        type: inputs.type
      });
      return userchurch;
    }

  }


};
