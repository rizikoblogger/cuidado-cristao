module.exports = {


  friendlyName: 'View edit guideline',


  description: 'Display "Edit guideline" page.',

  inputs: {
    id: {
      type: 'string',
      required: true
    }
  },


  exits: {

    success: {
      viewTemplatePath: 'pages/guideline/edit-guideline'
    }

  },


  fn: async function ({id}) {
    const Guideline = sails.models.guideline
    const Classroom = sails.models.classroom

    const classrooms = await Classroom.find()

    if (id === `new`) {
      return {classrooms: classrooms, guideline: {tos: []}}
    } else {
      const guideline = await Guideline.findOne({id: id}).populate(`tos`)
      return {classrooms: classrooms, guideline: guideline};
    }

  }


};
