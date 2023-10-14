module.exports = {


  friendlyName: 'Save social',


  description: '',


  inputs: {
    id: {type: 'string'},
    nome: {type: 'string', required: true},
    descricao: {type: 'string', required: false},
    users: {type: 'ref'}
  },


  exits: {
    success: {
      description: 'Done'
    }
  },


  fn: async function (inputs) {

    if (inputs.id) {
      const social = await SocialService.updateOne({id: inputs.id}, {
        nome: inputs.nome,
        descricao: inputs.descricao,
        users: [...inputs.users]
      })
      return {social}

    }else {
      const social = await SocialService.create({
        nome: inputs.nome,
        descricao: inputs.descricao,
        users: [...inputs.users]
      }).fetch()

      return {social}
    }

  }


}
