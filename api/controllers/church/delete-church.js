module.exports = {


  friendlyName: 'Delete church',


  description: '',


  inputs: {
    id: {type: 'string', required: true}
  },


  exits: {
    redirect: {
      description: 'O dado foi atualizado ou adicionado.',
      extendedDescription: 'Voltando para a listagem atualizada"'
    },
    badCombo: {
      description: `A delecao / remocao da igreja principal nao pode ser realizada `,
      responseType: 'unauthorized'
    }

  },


  fn: async function (inputs) {

    const church = await Church.findOne({id: inputs.id})
    if(church.tipo === `MOTHER`){
      throw 'badCombo'
    }

    await Church.destroy({id: inputs.id})

    return {}

  }


}
