module.exports = {


  friendlyName: 'View homepage or redirect',


  description: 'Display or redirect to the appropriate homepage, depending on login status.',


  exits: {

    success: {
      statusCode: 200,
      description: 'Requesting user is a guest, so show the public landing page.',
      viewTemplatePath: 'pages/homepage'
    },

    redirect: {
      responseType: 'redirect',
      description: 'Requesting user is logged in, so redirect to the internal welcome page.'
    },

  },


  fn: async function () {

    if (this.req.me) {
      throw {redirect:'/welcome'}
    }

    const mainChurch = await Church.findOne({tipo: 'MOTHER'})
    const classRooms = await Classroom.find()

    return {mainChurch: mainChurch, classRooms: classRooms }

  }


}
