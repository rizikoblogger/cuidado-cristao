const { log } = require('grunt')

const sails = require('sails')

module.exports = {
  menuBuilder: function (me) {

    const services = []

    // validate if user is logged in
    if (!me) {
      log.error('failed to get user')
      return services
    }

    if (me.isSuperAdmin) {
      services.push(
        { 'title': sails.__('Churches'), 'href': '/church/search-church', 'description': sails.__('Manage religious organizations') },
        { 'title': sails.__('Groups'), 'href': '/classe/search-classe', 'description': sails.__(`Manage groups in your organization`) },
        { 'title': sails.__('Resources'), 'href': '/resource/search-resource', 'description': sails.__(`Manage Resources in a organization`) },
        { 'title': sails.__('Sermons'), 'href': '/sermon/search-sermon', 'description': sails.__(`Manage Sermons of your church`) },
        { 'title': sails.__('Users'), 'href': '/user/search-user', 'description': sails.__(`Manage Users of your church`) },
        { 'title': sails.__('Social Service'), 'href': '/social/social-search', 'description': sails.__(`Manage Sermons of your church`) },
        { 'title': sails.__('Frequently Asked Questions'), 'href': '/search-faq', 'description': sails.__(`Manage Sermons of your church`) },
      )
    }

    if (me.profile === `administrator`) {
      services.push(
        {
          'title': sails.__('Contributions'),
          'href': '/contribution/search-contribution',
          'description': sails.__('Manage Contributions in a organization')
        },
        {
          'title': sails.__('Members'),
          'href': '/report/dashboard-report',
          'description': sails.__('Get a full member report')
        },
        {
          'title': sails.__('Christian Care'),
          'href': '/usercare/search-usercare',
          'description': sails.__('Taking care of congregants')
        },
        {
          'title': sails.__('Guidelines'),
          'href': '/guideline/search-guideline',
          'description': sails.__('Organization guidelines')
        }
      )
    }

    return services
  }
}
