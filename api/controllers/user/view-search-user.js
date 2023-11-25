module.exports = {


  friendlyName: 'View search user',


  description: 'Display "Search user" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/user/search-user'
    }

  },


  fn: async function () {

    const users = await User.find().populate(`church`)
    return {users};

  }


};
