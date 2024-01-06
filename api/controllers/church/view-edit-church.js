module.exports = {


  friendlyName: 'View edit church',


  description: 'Display "Edit church" page.',

  inputs: {
    id: {type: 'string'}
  },


  exits: {

    success: {
      viewTemplatePath: 'pages/church/edit-church'
    },



  },


  fn: async function ({id}) {

    const countChurch = await Church.count()

    if (id === 'new') {
      return {
        igreja: {
          id: '',
          fullName: '',
          shortName: '',
          email: '',
          address: '',
          site: '',
          phone: '',
          linktree: '',
          tipo: countChurch > 0?'DAUGHTER':'MOTHER',
          churchFacilities: [],
          churchLearnings:[],
          churchMeetings: [],
        }
      }
    }

    const igreja = await Church.findOne({id: id}).populate(`classrooms`).populate(`sermons`)
    return {igreja}

  }


}
