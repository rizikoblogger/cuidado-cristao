parasails.registerPage('edit-resource', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    message: {
      severity: ``, summary: ``, detail: ``
    },

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
      name: {required: true},
      detail: {required: true},
      location: {required: true},
      tipo: {required: true}
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
    this.formData = this.resource
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
      this.message = {severity: `success`, summary: `Saved successfully!`}
      this.cloudSuccess = true

    },

    addChurch: function (church) {
      this.resource.church = church
    },

    cancel: function () {
      this.goto(`/resource/search-resource`)
    },

    cleanMessage: function () {
      this.message = {}
      this.goto(`/resource/search-resource`)
    }
  }

})
