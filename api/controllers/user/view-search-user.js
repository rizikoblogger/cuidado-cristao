module.exports = {


  friendlyName: 'View search user',


  description: 'Display "Search user" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/user/search-user'
    }

  },


  fn: async function () {

    const natives =  await User
      .find()
      .populate(`church`)
      .populate(`userCares`)
      .populate(`socialServices`)
      .populate(`contributions`)
      .populate(`classrooms`)

    const users = []

    natives.forEach(native=>{
      const user = {
        id: native.id,
        emailAddress: native.emailAddress,
        fullName: native.fullName,
        isSuperAdmin: native.isSuperAdmin,
        church: native.church,
        userCares: native.userCares,
        socialServices: native.socialServices,
        contributions: native.contributions,
        classrooms: native.classrooms
      }
      users.push(user)
    })

    return {users}

  }


}
