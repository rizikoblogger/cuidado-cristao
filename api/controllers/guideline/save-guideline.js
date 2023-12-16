module.exports = {


  friendlyName: 'Save guideline',


  description: '',


  inputs: {
    id: {type: `string`},
    sequence: {type: `number`, required: true},
    text: { type: `string`, required: true, description: `free text`}
  },


  exits: {
    success: {
      description: `Done`
    },

    sequenceAlreadyInUse: {
      statusCode: 409,
      description: 'The provided sequence is already in use.',
    },

  },


  fn: async function (inputs) {

    if(inputs.id){
      const guideline = await Guideline.updateOne(
        {id: inputs.id},
        {
          sequence: inputs.sequence,
          text: inputs.text
        }
      ).intercept('E_UNIQUE', 'sequenceAlreadyInUse')

      return {guideline}
    }else{
      const guideline = await Guideline.create(
        {
          sequence: inputs.sequence,
          text: inputs.text
        }
      ).intercept('E_UNIQUE', 'sequenceAlreadyInUse')

      return guideline
    }



  }


}
