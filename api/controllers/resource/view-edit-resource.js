module.exports = {


  friendlyName: 'View edit resource',


  description: 'Display "Edit resource" page.',

  inputs: {
    id: {type: `string`, required: true}
  },


  exits: {

    success: {
      viewTemplatePath: 'pages/resource/edit-resource'
    }

  },


  fn: async function ({id}) {

    const churchs = await Church.find()
    const resource = {}

    if(id!==`new`){
      resource = await resource.find({id: id}).populate(`church`)

    }
    return {churchs: churchs, resource: resource};

  }


};
