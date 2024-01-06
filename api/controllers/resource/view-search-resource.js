module.exports = {


  friendlyName: 'View search resource',


  description: 'Display "Search resource" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/resource/search-resource'
    }

  },


  fn: async function () {

    const resources = await Resource.find().populate(`church`)
    return {resources};

  }


};
