module.exports = {


  friendlyName: 'View search priests',


  description: 'Display "Search priests" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/report/search-priests'
    }

  },


  fn: async function () {

    const list = await User.find({profile: `priest`}).sort([{fullName: 'DESC'}]).populate('church')

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
