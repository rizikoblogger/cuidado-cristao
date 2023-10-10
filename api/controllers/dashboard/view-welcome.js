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

    const allTemples = await Church.find()

    const userChurchs = await UserChurch.find({userId: this.req.me.id})

    const myChurchs = []
    if(userChurchs.length > 0){
      const _id = userChurchs[0].churchId
      let church = await Church.findOne({id: _id})
      myChurchs.push(church)
    }

    return {allTemples, myChurchs}


  }


}
