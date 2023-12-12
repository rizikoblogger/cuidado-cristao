module.exports = {


  friendlyName: 'View search administrators',


  description: 'Display "Search administrators" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/report/search-administrators'
    }

  },


  fn: async function () {

    const list = await User.find({profile: `administrator`}).sort([{fullName: 'DESC'}]).populate('church')

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
