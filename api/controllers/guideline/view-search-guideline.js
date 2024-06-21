module.exports = {


  friendlyName: 'View search guideline',


  description: 'Display "Search guideline" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/guideline/search-guideline'
    }

  },


  fn: async function () {

    const Guideline = sails.models.guideline
    const guidelines = await Guideline.find().populate(`tos`)
    return {guidelines};

  }


};
