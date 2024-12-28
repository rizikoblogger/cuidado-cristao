module.exports = {


  friendlyName: 'Save usercare',


  description: '',


  inputs: {

    id: {
      type: `string`
    },
    dtContact: {
      type: 'string',
      description: 'Date of contact, pray, service or any other relationship with User'
    },

    record: {
      type: 'string',
      description: 'Write down here the record of occurences during this relationship'
    },

    whoCares: {
      type: `string`,
      description: `The name of who is taking care of this User`
    },

    user: {
      type: 'string',
      required: true,
      description: 'The ID of model/User.js who is being taken care of'
    },

    owner: {
      type: 'string',
      required: true,
      description: 'The ID of model/Userljs who cares of him'
    }


  },


  exits: {},


  fn: async function (inputs) {

    const Usercare = sails.models.usercare

    if (inputs.id) {
      const usercare = await Usercare.updateOne({id: inputs.id},
        {
          dtContact: inputs.dtContact,
          record: inputs.record,
          whoCares: inputs.whoCares,
          user: inputs.user,
          owner: inputs.owner
        }
      )
      return {usercare: usercare}
    } else {
      const usercare = await Usercare.create(
        {
          dtContact: inputs.dtContact,
          record: inputs.record,
          whoCares: inputs.whoCares,
          user: inputs.user,
          owner: inputs.owner
        }
      ).fetch()
      return {usercare: usercare}
    }

  }


};
