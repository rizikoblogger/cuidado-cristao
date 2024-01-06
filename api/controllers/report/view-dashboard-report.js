module.exports = {


  friendlyName: 'View dashboard report',


  description: 'Display "Dashboard report" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/report/dashboard-report'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
