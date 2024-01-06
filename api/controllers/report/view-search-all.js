module.exports = {


  friendlyName: 'View search all',


  description: 'Display "Search all" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/report/search-all'
    }

  },


  fn: async function () {

    const list = await User.find().sort([{fullName: 'DESC'}]).populate('church')

    const users = []

    list.forEach(instance=>{
      // Exclude any fields corresponding with attributes that have `protect: true`.
      let sanitizedUser = _.extend({}, instance)
      sails.helpers.redactUser(sanitizedUser)
      users.push(sanitizedUser)
    })

    return {users}

  }


}
