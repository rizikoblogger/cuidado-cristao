module.exports = {


  friendlyName: 'Page factory',


  description: '',

  extendedDescription: `
     list: recebe um array que sera convertido em Page: {content: [], number: 0, size: 0, totalRecords: 0}
     page: o numero da paginaonde o cursor esta posicionado
     size: o tamanho maximo de registros por pagina
     totalRecords: o total de registros da base de dados
  `,


  inputs: {
    list: {
      type: 'ref',
      required: true,
      description: 'recebe um array que sera convertido em Page: {content: [], number: 0, size: 0, totalRecords: 0}'
    },
    page: {type:'number', required: true},
    size: {type: 'number', required: true},
    totalRecords: {type: 'number', required: true}
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {

    if(!inputs || !inputs.list || inputs.list < 1){
      return {page: {content: [], number: 0, size: 0, totalRecords: 0}};
    }

    const limit = inputs.list.size < inputs.size ? inputs.list.size : inputs.size;
    return {page: {content: inputs.list, number: inputs.page, size: limit, totalRecords: inputs.totalRecords}};
  }


};

