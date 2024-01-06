module.exports = {


  friendlyName: 'View search congregants',


  description: 'Display "Search congregants" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/report/search-congregants'
    }

  },


  fn: async function () {

    const list = await User.find({profile: `congregant`}).sort([{fullName: 'DESC'}]).populate('church')

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
