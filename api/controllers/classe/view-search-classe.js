module.exports = {


  friendlyName: 'View search classe',


  description: 'Display "Search classe" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/classe/search-classe'
    }

  },


  fn: async function () {

    const classes = await Classroom.find()
    return {classes};

  }


};
