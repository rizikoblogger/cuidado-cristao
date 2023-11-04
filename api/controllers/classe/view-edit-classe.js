module.exports = {


  friendlyName: 'View edit classe',


  description: 'Display "Edit classe" page.',

  inputs: {
    id: { type: 'string'}
  },

  exits: {

    success: {
      viewTemplatePath: 'pages/classe/edit-classe'
    }

  },


  fn: async function ({id}) {

    const classe = await Classroom.findOne({id: id}).populate('church')
    return {classe};

  }


};
