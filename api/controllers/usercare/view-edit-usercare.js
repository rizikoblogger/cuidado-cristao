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

      const user = await User.findOne({id: userId})

      return {
        usercare: {
          dtContact: new Date(),
          record: ``,
          whoCares: ``,
          user: user
        }
      }
    }else{
      const usercare = await Usercare.find({id: id}).populate(`user`)
      return {usercare}
    }

  }


}
