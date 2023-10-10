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

    if (id === 'new') {
      return {
        igreja: {
          id: '',
          fullName: '',
          shortName: '',
          email: '',
          address: '',
          site: '',
          phone: '',
          linktree: '',
          tipo: 'DAUGHTER'
        }
      };
    }

    const igreja = await Church.findOne({id: id});
    return {igreja};

  }


};
