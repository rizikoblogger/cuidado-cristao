module.exports = {


  friendlyName: 'Delete church',


  description: '',


  inputs: {
    id: {type: 'string', required: true}
  },


  exits: {
    redirect: {
      description: 'O dado foi atualizado ou adicionado.',
      extendedDescription: 'Voltndo para a listagem atualizada"',
      responseType: 'redirect',
    }
  },


  fn: async function (inputs) {

    await Church.destroy({id: inputs.id})

    throw {redirect: '/church/search-church'};

  }


};
