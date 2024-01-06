module.exports = {


  friendlyName: 'Save faq',


  description: '',


  inputs: {
    id: {type: 'string'},
    question: {type: 'string', required: true},
    answer: {type: 'string', required: true},
    lang: {type: `string`, isIn: ['pt','en'] }
  },


  exits: {
    success: {
      description: 'Done'
    }
  },


  fn: async function (inputs) {


   const count = await Faq.count({id: inputs.id})
    if(count > 0){
      return await Faq.update({id: inputs.id},  {
        question: inputs.question,
        answer: inputs.answer,
        lang: inputs.lang
      })
    } else {
      return await Faq.create( {
        question: inputs.question,
        answer: inputs.answer,
        lang: inputs.lang
      }).fetch()
    }

  }


};
