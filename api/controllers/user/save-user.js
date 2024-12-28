module.exports = {


  friendlyName: 'Save user',


  description: '',


  inputs: {

    id: {
      type: `string`
    },

    profile: {
      type: 'string'
    },

    emailAddress: {
      type: 'string',
      required: true
    },

    fullName: {
      type: 'string',
      required: true,
      description: 'Full representation of the user\'s name.'
    },

    isSuperAdmin: {
      type: `boolean`, required: true
    },

    church: {
      type: 'ref', description: `An Object which represents a model/Church.js instance`
    },

    userCares: {
      type: 'ref', description: `A List of model/Usercare.js Objects`
    },

    socialServices: {
      type: 'ref', description: `A List of model/SocialService.js Objects`
    },

    contributions: {
      type: 'ref', description: `A List of model/Contribution.js Objects`
    },

    classrooms: {
      type: 'ref', description: `A List of model/Classroom.js Objects`
    }
  },


  exits: {
    success: {
      description: `Done`
    }

  },


  fn: async function (inputs) {

    const User = sails.models.user

    if (inputs.id) {

      const userCaresIds = []
      const socialServicesIds = []
      const contributionsIds = []
      const classroomsIds = []

      if (inputs.userCares) {
        inputs.userCares.forEach(care => userCaresIds.push(care.id))
      }
      if (inputs.socialServices) {
        inputs.socialServices.forEach(social => socialServicesIds.push(social.id))
      }
      if (inputs.contributions) {
        inputs.contributions.forEach(contribution => contributionsIds.push(contribution.id))
      }
      if (inputs.classrooms) {
        inputs.classrooms.forEach(classroom => classroomsIds.push(classroom.id))
      }

      await User.updateOne({id: inputs.id}, {
        profile: inputs.profile,
        emailAddress: inputs.emailAddress,
        fullName: inputs.fullName,
        isSuperAdmin: inputs.isSuperAdmin,
        church: inputs.church ? inputs.church.id : undefined,
        userCares: [],
        socialServices: [],
        contributions: [],
        classrooms: []
      })

      await User.addToCollection(inputs.id, `userCares`).members(userCaresIds)
      await User.addToCollection(inputs.id, `socialServices`).members(socialServicesIds)
      await User.addToCollection(inputs.id, `contributions`).members(contributionsIds)
      await User.addToCollection(inputs.id, `classrooms`).members(classroomsIds)

      return await User.findOne({id: inputs.id})
    }

  }


}
