module.exports = {


  friendlyName: 'Save contribution',


  description: '',


  inputs: {

    id: { type: 'string'},

    dtContribution: {
      type: 'string',      
      required: true,
      description: 'Date of this finantial contribution'
    },

    value: {
      type: 'number',
      description: 'How much money was contributed',
      required: true
    },

    propose: {
      type: 'string',
      description: 'For what propose this contribution was done'
    },

    user: { 
      type: 'ref',
      description: 'A model/User.js Object representation'
    }
  },


  exits: {
    success: {
      description: 'Done'
    }
  },


  fn: async function (inputs) {

    if(inputs.id&&inputs.id!==`0`){
      const contribution = await Contribution.updateOne({id: inputs.id},{
        dtContribution: inputs.dtContribution,    
        value: inputs.value,    
        propose: inputs.propose,
        user: inputs.user.id
      })
      return {contribution}
    }else{
      const contribution = await Contribution.create({
        dtContribution: inputs.dtContribution,    
        value: inputs.value,    
        propose: inputs.propose,
        user: inputs.user.id
      }).fetch()
      return {contribution}
    }

  }


};
