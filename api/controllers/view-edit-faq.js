module.exports = {


  friendlyName: 'View edit faq',


  description: 'Display "Edit faq" page.',

  inputs: {
    id: { type: 'string'}
  },


  exits: {

    success: {
      viewTemplatePath: 'pages/edit-faq'
    }

  },


  fn: async function ({id}) {

    if(id==='new'){
      return { faq: {
        id: undefined,
        question: '',
        answer: '',
        lang: 'pt'
      }}
    }else{
      const faq = await Faq.findOne({id: id})
      return {faq}
    }



  }


};
