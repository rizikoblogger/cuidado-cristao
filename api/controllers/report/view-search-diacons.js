module.exports = {


  friendlyName: 'View search diacons',


  description: 'Display "Search diacons" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/report/search-diacons'
    }

  },


  fn: async function () {

    const list = await User.find({profile: `deacon`}).sort([{fullName: 'DESC'}]).populate('church')

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
