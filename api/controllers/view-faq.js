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
          {question: `How to set Chrurch information?`, answer: `After logged in as ADMIN you will be able to choose Edit Church option and there you will find all available settings`, lang: `en`},
          {question: `Como configurar as informações da Igreja?`, answer: `Depois de se logar como ADMIN você será capaz de escolher Editar Igreja e lá encontrarás todas as configurações disponíveis`, lang: `pt`},
          {question: `I had already changed all available settings, but...?`, answer: `Almost everything is change by settings options, but there are some points that can be changed by developers only. Take a look at README.md file to know more`, lang: `en`},
          {question: `Eu já modifiquei todas as configurações possiveis, mas... ?`, answer: `Quase tudo pode ser modificado nas opções de configuração, mas existem alguns pontos que somente programadores podem modificar. Dá uma olhada no arquivo README.md para saber mais`, lang: `pt`},
        ]
      )
    }

    const list = await Faq.find()
    return {list}
  }


}
