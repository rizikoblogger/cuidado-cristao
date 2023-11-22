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
    let resource = {
      tipo: ``,
      name: ``,
      detail: ``,
      location: ``,
      church: {fullName: ``, shortName: ``, tipo: ``}
    }

    if(id!==`new`){
      resource = await Resource.findOne({id: id}).populate(`church`)

    }
    return {churchs: churchs, resource: resource}

  }


}
