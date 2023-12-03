module.exports = {


  friendlyName: 'View search contribution',


  description: 'Display "Search contribution" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/contribution/search-contribution'
    }

  },


  fn: async function () {

    const totalRecords = await Contribution.count()

    const skip = this.req.query?.page | 0
    const size = this.req.query?.size | 10

    const contributions = await Contribution
      .find({})
      .sort([{dtContribution: `DESC`}])
      .skip(skip*size)
      .limit(size).populate('user')

    const page = await sails.helpers.pageFactory.with({
      list: contributions,
      page: skip,
      size: size,
      totalRecords: totalRecords
    })

    return {page};

  }


};
