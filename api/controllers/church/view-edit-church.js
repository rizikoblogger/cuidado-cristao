module.exports = {


  friendlyName: 'View edit church',


  description: 'Display "Edit church" page.',

  inputs: {
    id: {type: 'string'}
  },


  exits: {

    success: {
      viewTemplatePath: 'pages/church/edit-church'
    }

  },


  fn: async function ({id}) {

    const igreja = await Church.findOne({id: id})
    return {igreja};

  }


};
