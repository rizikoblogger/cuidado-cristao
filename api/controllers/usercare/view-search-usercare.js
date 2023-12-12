module.exports = {


  friendlyName: 'View search usercare',


  description: 'Display "Search usercare" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/usercare/search-usercare'
    }

  },


  fn: async function () {

    const list = await User.find().sort([{fullName: 'DESC'}]).populate('userCares')

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
