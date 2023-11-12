module.exports = {


  friendlyName: 'View edit sermon',


  description: 'Display "Edit sermon" page.',

  inputs: {
    id: { type: 'string', required: true}
  },


  exits: {

    success: {
      viewTemplatePath: 'pages/sermon/edit-sermon'
    }

  },


  fn: async function ({id}) {

    const sermon = await Sermon.findOne({id: id}).populate('church')
    return {sermon};

  }


};
