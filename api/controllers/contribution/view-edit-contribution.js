const Contribution = require("../../models/Contribution");

module.exports = {


  friendlyName: 'View edit contribution',


  description: 'Display "Edit contribution" page.',

  inputs: {
    id: { type: 'string'}
  },


  exits: {

    success: {
      viewTemplatePath: 'pages/contribution/edit-contribution'
    }

  },


  fn: async function ({id}) {

    if(id==='new'){
      return {};
    }else{
      const contribution = await Contribution.findOne({id: id}).populate('user')
    }

  }


};
