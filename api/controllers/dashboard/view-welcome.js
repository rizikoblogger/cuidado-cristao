const menuService = require('../../services/menuService')

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

    const user = await User.findOne({id: this.req.me.id}).populate(`church`).populate('classrooms')
    const temples = await Church.find()
    const groups = await Classroom.find()
    const myChurchs = []
    if(user.church) myChurchs.push(user.church)

    return {
      user: user,
      temples: temples,
      myChurchs: myChurchs,
      groups: groups,
      services: menuService.menuBuilder(this.req.me)
    }
  }

}
