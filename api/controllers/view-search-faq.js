module.exports = {


  friendlyName: 'View search faq',


  description: 'Display "Search faq" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/search-faq'
    }

  },


  fn: async function () {

    const faqs = await Faq.find()
    return {faqs};

  }


};
