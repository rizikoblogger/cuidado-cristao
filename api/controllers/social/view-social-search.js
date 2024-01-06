module.exports = {


  friendlyName: 'View social search',


  description: 'Display "Social search" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/social/social-search'
    }

  },


  fn: async function () {

    const list = await SocialService.find()
    return {list};

  }


};
