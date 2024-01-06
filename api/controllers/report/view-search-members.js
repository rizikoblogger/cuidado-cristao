module.exports = {


  friendlyName: 'View search members',


  description: 'Display "Search members" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/report/search-members'
    }

  },


  fn: async function () {

    const list = await User.find({profile: `member`}).sort([{fullName: 'DESC'}]).populate('church')

    const users = []

    list.forEach(instance=>{
      // Exclude any fields corresponding with attributes that have `protect: true`.
      let sanitizedUser = _.extend({}, instance)
      sails.helpers.redactUser(sanitizedUser)
      users.push(sanitizedUser)
    })

    return {users}

  }


};
