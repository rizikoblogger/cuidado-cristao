module.exports = {


  friendlyName: 'View edit user',


  description: 'Display "Edit user" page.',

  inputs: {
    id: {type: 'string', required: true}
  },


  exits: {

    success: {
      viewTemplatePath: 'pages/user/edit-user'
    }

  },


  fn: async function ({id}) {

    const churchs = await Church.find()
    const classrooms = await Classroom.find()
    let user = {}

    if(id===`new`){
      return {churchs: churchs, classrooms: classrooms, user: user}
    }else{
      user = await User.findOne({id: id}).populate(`church`).populate(`classrooms`)
      return {churchs: churchs, classrooms: classrooms, user: user}
    }

  }


}
