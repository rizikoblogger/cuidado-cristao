/**
 * Church.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
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
    }

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝


  },

};

