module.exports = {


  friendlyName: 'View faq',


  description: 'Display "FAQ" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/faq'
    }

  },


  fn: async function () {

    const countFaq = await Faq.count()
    if (countFaq < 1) {
      await Faq.createEach(
        [
          {question: `What to do when first-accessing?`, answer: `You have to create - signup -  a brand new user. If it is the first one it'll be an ADMIN by default. After that you have to create a brand new Church as [MOTHER]`, lang: `en`},
          {question: `O que fazer no primeiro acesso?`, answer: `Você precisa criar (registrar) um novo usuário. Se este for o primeiro usuário criado, então ele terá o status de ADMIN. Depois disso você deve criar uma nova Igreja do tipo [IGREJA MÃE]`, lang: `pt`},
        ]
      )
    }

    const list = await Faq.find()
    return {list}
  }


}
