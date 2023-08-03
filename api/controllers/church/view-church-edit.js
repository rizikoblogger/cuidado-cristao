module.exports = {


  friendlyName: 'View church edit',


  description: 'Display "Church edit" page.',

  inputs: {
    id: {type: `string`, required: true}
  },


  exits: {

    success: {
      viewTemplatePath: 'pages/church/church-edit'
    }

  },


  fn: async function ({id}) {

    if(id==`new`){
      return {}
    }

    let church = await Church.findOne({id: id})
    return {church};

  }


};
