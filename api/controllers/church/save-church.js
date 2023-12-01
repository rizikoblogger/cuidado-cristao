module.exports = {

  friendlyName: 'Save church',

  description: '',

  inputs: {

    id: {type: 'string'},

    fullName: {
      type: 'string',
      description: 'The full name of Church',
      required: true
    },

    shortName: {
      type: 'string',
      description: 'The short name or alias',
      required: true
    },

    email: {
      type: 'string',
      description: 'The main email of Church',
      example: 'ghospel@mychurch.org',
      required: true
    },

    address: {
      type: 'string',
      description: 'Full address with street, number, zip, et.al.',
      required: false
    },

    site: {
      type: 'string',
      example: 'http://www.mychurch.org',
      description: 'The internet address of church',
      required: false
    },

    phone: {
      type: 'string',
      description: 'The church`s phone number (or numbers)',
      required: false
    },

    linktree: {
      type: 'string',
      description: 'The url / internet address to linktree server site',
      required: false
    },
    tipo: {
      type: `string`,
      description: 'The type of MOTHER or DAUGHTER',
      required: true
    },
    ourCommunityText: {
      type: `string`
    },
    churchMissionText: {
      type: 'string'
    },
    joinToGroupText: {
      type: 'string'
    },
    churchBeliefsText: {
      type: `string`
    },
    churchFacilities: {
      type: 'ref'
    },
    churchLearnings: {
      type: 'ref'
    },
    churchMeetings: {
      type: 'ref'
    },
  },

  exits: {
    redirect: {
      description: 'O dado foi atualizado ou adicionado.',
      extendedDescription: 'Voltando para a listagem atualizada',
      responseType: 'redirect',
    }
  },

  fn: async function (inputs) {
    if (inputs.id) {
      const church = await Church.updateOne({id: inputs.id},
        {
          fullName: inputs.fullName,
          shortName: inputs.shortName,
          email: inputs.email,
          address: inputs.address,
          site: inputs.site,
          phone: inputs.phone,
          tipo: inputs.tipo,
          linktree: inputs.linktree,
          ourCommunityText: inputs.ourCommunityText,
          churchMissionText: inputs.churchMissionText,
          joinToGroupText: inputs.joinToGroupText,
          churchBeliefsText: inputs.churchBeliefsText,
          churchFacilities: inputs.churchFacilities,
          churchLearnings:inputs.churchLearnings,
          churchMeetings: inputs.churchMeetings
        })
      throw {redirect: '/church/search-church'}
    } else {
      const church = await Church.create({
        fullName: inputs.fullName,
        shortName: inputs.shortName,
        email: inputs.email,
        address: inputs.address,
        site: inputs.site,
        phone: inputs.phone,
        tipo: inputs.tipo,
        linktree: inputs.linktree,
        ourCommunityText: inputs.ourCommunityText,
        churchMissionText: inputs.churchMissionText,
        joinToGroupText: inputs.joinToGroupText,
        churchBeliefsText: inputs.churchBeliefsText,
        churchFacilities: inputs.churchFacilities,
        churchLearnings:inputs.churchLearnings,
        churchMeetings: inputs.churchMeetings
      }).fetch()
      throw {redirect: '/church/search-church'}
    }
  }
}
