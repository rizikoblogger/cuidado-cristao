module.exports = {


  friendlyName: 'Gera lista palavras',


  description: 'Gera lista de palavras aleatórias.',


  inputs: {
    qnt: {type: 'number', required: true, description: `Quantidade de palavras de cada linha`},
    tam: {type: 'number', required: true, description: `Quantidade de registros listados no array de resposta`}
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    const {faker} = require('@faker-js/faker')
    let list = []
    for(let i=1; i<=inputs.tam; i++){
      list.push(faker.lorem.words(inputs.qnt))
    }
    return list
  }


};

