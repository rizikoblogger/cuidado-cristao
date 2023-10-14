module.exports = {


  friendlyName: 'View social edit',


  description: 'Display "Social edit" page.',

  inputs: {
    id: {type: 'string', required: true}
  },

  exits: {

    success: {
      viewTemplatePath: 'pages/social/social-edit'
    }

  },


  fn: async function ({id}) {

    if(id!='new'){
      const social = await SocialService.findOne({id: id}).populate(`users`)
      return {social}
    }
    return {social: {nome: ``, descricao: ``, users: []}}

  }


}
