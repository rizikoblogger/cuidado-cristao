module.exports = {


  friendlyName: 'View edit usercare',


  description: 'Display "Edit usercare" page.',

  inputs: {
    id: {type: `string`, required: true},
    userId: {
      type: `string`,
      required: false,
      description: `The model/User.js id to associate when creating a brand new UserCare`
    }
  },


  exits: {

    success: {
      viewTemplatePath: 'pages/usercare/edit-usercare'
    }

  },


  fn: async function ({id, userId}) {

    if(id===`new`){

      const User = sails.models.user;

      const user = await User.findOne({id: userId}).populate(`church`)
      const me = await User.findOne({id: this.req.me.id})

      return {
        usercare: {
          dtContact: new Date(),
          record: ``,
          whoCares: me,
          user: user
        }
      }
    }else{
      const usercare = await Usercare.findOne({id: id}).populate(`user`).populate('whoCares')
      return {usercare: usercare}
    }

  }


}
