module.exports = {


  friendlyName: 'View edit usercare',


  description: 'Display "Edit usercare" page.',

  inputs: {
    id: {type: `string`, required: true},
    userId: {
      type: `string`,
      required: false,
      description: `The model/User.js who will be cared of`
    }
  },


  exits: {

    success: {
      viewTemplatePath: 'pages/usercare/edit-usercare'
    }

  },


  fn: async function ({id, userId}) {

    if(id===`new`){
      let user = await User.findOne(userId)
      await sails.helpers.redactUser(user)
      return {
        usercare: {
          dtContact: new Date(),
          record: ``,
          whoCares: ``,
          user: user,
          owner: this.req.me.id
        }
      }
    }else{
      const usercare = await Usercare.findOne({id: id})
      let user = await User.findOne(userId)
      await sails.helpers.redactUser(user)
      usercare.user = user
      return {usercare: usercare}
    }

  }


}
