module.exports = {


  friendlyName: 'View welcome page',


  description: 'Display the dashboard "Welcome" page.',

  inputs: {
    id: {type: `string`, required: true}
  },

  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/welcome',
      description: 'Display the welcome page for authenticated users.'
    },

  },


  fn: async function ({id}) {

    let churchs = []
    let temples = await Church.find({})
    let userChurch = await UserChurch.find({userId: id})
    if(userChurch.length > 0){
      churchs = await Church.find({id: userChurch[0].churchId})
    }
    return {churchs, temples}

  }


};
