module.exports = {


  friendlyName: 'View search guideline',


  description: 'Display "Search guideline" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/guideline/search-guideline'
    }

  },


  fn: async function () {

    const guidelines = await Guideline.find().sort([{sequence: `ASC`}])
    return {guidelines}

  }


}
