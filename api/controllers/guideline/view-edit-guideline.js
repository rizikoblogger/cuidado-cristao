module.exports = {


  friendlyName: 'View edit guideline',


  description: 'Display "Edit guideline" page.',

  inputs: {
    id: { type: `string`, required: true}
  },

  exits: {

    success: {
      viewTemplatePath: 'pages/guideline/edit-guideline'
    }

  },


  fn: async function ({id}) {

    if(id===`new`){
      return {guideline: {}}
    }
    const guideline = await Guideline.findOne({id: id})
    return {guideline}

  }


}
