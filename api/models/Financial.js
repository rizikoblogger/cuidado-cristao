/**
 * Financial.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    tipo: {
      type: `string`,
      description: `Financial Type for accountability`,
      example: `credit`, isIn: [`credit`, `debit`],
      defaultsTo: `credit`
    },

    amount: {type: `number`, required: true},

    currency: {
      type: `string`, description: `ISO 4217 currency code`, example: `USD`, isIn: [`USD`, `EUR`, `BRL`], required: true
    },

    note: {
      type: `string`, description: `Any additional information about this financial transaction`, example: `This is a note about this financial transaction`
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝

    createdBy: {model: `User`},
    updatedBy: {model: `User`},


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    center: {model: `Center`, required: true},

    documentations: {collection: `Documentation`, via: `financial`},

  },

  tablename: `fiancialEclesia`

};

