module.exports = {


  friendlyName: 'View search classe',


  description: 'Display "Search classe" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/classe/search-classe'
    }

  },


  fn: async function () {

    const me = await User.findOne({id: this.req.me.id}).populate(`classrooms`)

    const classes = await Classroom.find()

    return {classes:classes, myClasses: me.classrooms}

  }


}
