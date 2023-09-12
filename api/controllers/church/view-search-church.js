module.exports = {


  friendlyName: 'View search church',


  description: 'Display "Search church" page.',

  inputs: {
    page: {type: 'number', required: false},
    size: {type: 'number', required: false}
  },


  exits: {

    success: {
      viewTemplatePath: 'pages/church/search-church'
    }

  },


  fn: async function ({page, size}) {

    const number = page | 0;
    const limit = size | 20;

    const count = await Church.count();
    const list = await Church.find({skip: number * limit, limit: limit});

    return await sails.helpers.pageFactory.with({
      list: list,
      page: number,
      size: limit,
      totalRecords: count
    });

  }


};
