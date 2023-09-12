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
    }
  },


  exits: {
    redirect: {
      description: 'O dado foi atualizado ou adicionado.',
      extendedDescription: 'Voltndo para a listagem atualizada"',
      responseType: 'redirect',
    }
  },


  fn: async function ({ id, fullName,shortName,email,address,site, phone,linktree, tipo}) {

    if(id){
      const church = await Church.updateOne({id: id},
        {
          fullName: fullName,
          shortName: shortName,
          email: email,
          address: address,
          site: site,
          phone: phone,
          tipo: tipo,
          linktree: linktree
        });
      throw {redirect: '/church/search-church'};
    } else {
      const church = await Church.create( {
        fullName: fullName,
        shortName: shortName,
        email: email,
        address: address,
        site: site,
        phone: phone,
        tipo: tipo,
        linktree: linktree
      }).fetch();
      throw {redirect: '/church/search-church'};
    }


  }


};
