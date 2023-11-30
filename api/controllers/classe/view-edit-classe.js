module.exports = {


  friendlyName: 'View edit classe',


  description: 'Display "Edit classe" page.',

  inputs: {
    id: {type: 'string'}
  },

  exits: {

    success: {
      viewTemplatePath: 'pages/classe/edit-classe'
    }

  },


  fn: async function ({id}) {

    const churchs = await Church.find()

    if (id === 'new') {
      return {classe: {}, churchs: churchs}
    } else {
      const classe = await Classroom.findOne({id: id}).populate('church')
      return {classe: classe, churchs: churchs};
    }

  }


};
