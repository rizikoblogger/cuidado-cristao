module.exports = {


  friendlyName: 'View welcome page',


  description: 'Display the dashboard "Welcome" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/welcome',
      description: 'Display the welcome page for authenticated users.'
    },



  },


  fn: async function () {

    const user = await User.findOne({id: this.req.me.id}).populate(`church`)
    const allTemples = await Church.find()
    const myChurchs = []
    if(user.church) myChurchs.push(user.church)

    return {allTemples, myChurchs}


  }


}
