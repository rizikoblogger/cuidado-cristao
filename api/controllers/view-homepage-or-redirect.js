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
    }else{
      const exist = await Church.count({tipo: 'MOTHER'})
      if(exist>0){
        
        const mainChurch = await Church.findOne({tipo: 'MOTHER'})
        const classRooms = await Classroom.find()
        const socialServices = await SocialService.find()
        const sermons = await Sermon.find()
        
        return {mainChurch: mainChurch, classRooms: classRooms, socialServices: socialServices, sermons: sermons }
        
      }else{
        return {mainChurch: {shortName: ``}, classRooms: [], socialServices: [], sermons: []}
      }
    }

  }


}
