module.exports = {


  friendlyName: 'View search sermon',


  description: 'Display "Search sermon" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/sermon/search-sermon'
    }

  },


  fn: async function () {

    const sermons = await Sermon.find().populate('church')
    return {sermons};

  }


};
