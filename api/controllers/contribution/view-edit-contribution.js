
module.exports = {


  friendlyName: 'View edit contribution',


  description: 'Display "Edit contribution" page.',

  inputs: {
    id: { type: 'string' }
  },


  exits: {

    success: {
      viewTemplatePath: 'pages/contribution/edit-contribution'
    }

  },


  fn: async function ({ id }) {

    const users = []

    if (id === 'new') {
      const allUser = await User.find()
      allUser.forEach(user => {
        var sanitizedUser = _.extend({}, user);
        sails.helpers.redactUser(sanitizedUser);
        users.push(sanitizedUser)
      })
      return {
        users: users, contribution: {
          dtContribution: new Date(),
          value: 0,
          propose: ``,
          user: undefined
        }
      };
    } else {
      const contribution = await Contribution.findOne({ id: id }).populate(`user`)
      return { contribution, users }
    }

  }


};
