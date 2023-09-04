module.exports = {


  friendlyName: 'Associar igreja',


  description: '',


  inputs: {
    userId: {type: 'string', required: true},
    churchId: {type: 'string', required: true}
  },


  exits: {
    success: {
      description: 'UserChurch updated successfully'
    },

    badRequest: {
      responseType: 'badRequest',
      description: 'The provided data are invalid.'
    }

  },


  fn: async function ({userId, churchId}) {

    const counter = await User.count({id: userId})
    if(counter < 1){
      return 'badRequest'
    }
    await UserChurch.updateOne({id: userId}, {churchId: churchId})
    return 'success';

  }


};
