parasails.registerPage('edit-user', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    message: {
      severity: '', summary: '', detail: ''
    },

    // Flag de sincronismo de estado (em execucao = true/aguardando = false).
    syncing: false,

    // Atributos/Dados editaveis do formulario que nao necessitam de validacao alguma
    formData: {
      id: ``
    },

    // Erros encontrados na validacao do formulario.
    // Internamente, o Sails grava {invalido = 'true' ou 'false'} para cada campo do formData.
    formErrors: { /* … */ },

    // Regras de validacao do formulario
    // Atributos / Dados do Formulario e regras de validacao
    // Atributos definidos aqui sao copiados internamente para o Objeto formData
    formRules: {
      emailAddress: {required: true, isEmail: true },
      fullName: {required: true, minLength: 5},
      isSuperAdmin: {required: true},

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

    // Flag de email confirmado
    // Inicialmente atualizado na montagem
    // Mas altera o [emailStatus] do usuario no backend
    // se modificado
    isEmailConfirmed: false,
  },


  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function () {
    //…
  },
  mounted: async function () {
    _.extend(this, window.SAILS_LOCALS)
    this.formData = this.user
    if(this.formData.emailStatus===`confirmed`) this.isEmailConfirmed = true
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    cleanMessage: function () {
      this.message = {}
      this.goto('/user/search-user')
    },
    // Este metodo e um exemplo de metodo invocado pelo evento submitted
    // do componente <ajax-form>
    submittedForm: async function() {
      // Tudo aqui sera processado somente se a requisicao enviada
      // obtiver 200 OK como resposta.
      this.cloudSuccess = true
      this.message.severity = 'success'
      this.message.summary = 'Saved Sucessfully!'
      this.message.details = ''

    },
    changeEmailConfirmedStatus: function() {
      if(this.isEmailConfirmed){
        this.formData.emailStatus = `confirmed`
      } else {
        this.formData.emailStatus = `unconfirmed`
      }
    }
  }
})
