module.exports = {


  friendlyName: 'Save usercare',


  description: '',


  inputs: {
    id: {
      type: 'string'
    },

    dtContact: {
      type: 'string',
      columnType: 'date',
      description: 'Date of contact, pray, service or any other relationship with User'
    },

    record: {
      type: 'string',
      description: 'Write down here the record of occurences during this relationship'
    },

    whoCares: {
      type: `ref`,
      description: `The reference of model/User.js who takes care of`
    },

    user: {
      type: `ref`,
      description: 'Who is being took care of'
    }
  },


  exits: {

  },


  fn: async function (inputs) {

    const Usercare = sails.models.usercare;

    if(inputs.id){
       const usercare = await Usercare.updateOne({id: inputs.id},{
         dateContact: inputs.dateContact,
         record: inputs.record,
         whoCares: inputs.whoCares.id,
         user: inputs.user.id
       })
      return {usercare}
    }else{
      const usercare = await Usercare.create({
        dateContact: inputs.dateContact,
        record: inputs.record,
        whoCares: inputs.whoCares.id,
        user: inputs.user.id
      })
      return {usercare}
    }

  }


};
