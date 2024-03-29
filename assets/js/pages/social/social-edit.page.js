parasails.registerPage('social-edit', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    message: {
      severity: ``,
      summary: ``,
      details: ``
    },

    // Flag de sincronismo de estado (em execucao = true/aguardando = false).
    syncing: false,

    // Atributos/Dados editaveis do formulario que nao necessitam de validacao alguma
    formData: {},

    // Erros encontrados na validacao do formulario.
    // Internamente, o Sails grava {invalido = 'true' ou 'false'} para cada campo do formData.
    formErrors: { /* … */},

    // Regras de validacao do formulario
    // Atributos / Dados do Formulario e regras de validacao
    // Atributos definidos aqui sao copiados internamente para o Objeto formData
    formRules: {
      nome: {required: true, minLength: 5},
      descricao: {required: true, minLength: 10}
    },

    // Armazena os error retornados pelo servidor, se
    // e somente se, a requisicao ao servidor teve
    // como origem a API Cloud.js (veja arquivo assets/cloud.setup.js)
    cloudError: '',

    // Flag de sucesso da requisicao enviada.
    // Deve ser convertida por acao programada
    // dentro metodo invocado pelo evento 'submitted' [@submitted="submittedForm()"]
    // invocado pelo <ajax-form> para caso de sucesso.
    cloudSuccess: false,
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function () {
    //…
  },
  mounted: async function () {
    _.extend(this, window.SAILS_LOCALS)
    this.formData = this.social
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    // Este metodo e um exemplo de metodo invocado pelo evento submitted
    // do componente <ajax-form>
    submittedForm: async function () {
      // Tudo aqui sera processado somente se a requisicao enviada
      // obtiver 200 OK como resposta.
      this.message.severity = `success`
      this.message.summary = `Salvo com sucesso`
      this.message.details = ``
      this.cloudSuccess = true

    },

    cleanMessage: function () {
      this.message = {}
      this.goto(`/social/social-search`)
    },

    goBack: function () {
      this.goto('/social/social-search')
    }
  }


})
