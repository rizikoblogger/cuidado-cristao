parasails.registerPage('edit-church', {
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
    formData: {
      rememberMe: true,
    },

    // Erros encontrados na validacao do formulario.
    // Internamente, o Sails grava {invalido = 'true' ou 'false'} para cada campo do formData.
    formErrors: { /* … */ },

    // Regras de validacao do formulario
    // Atributos / Dados do Formulario e regras de validacao
    // Atributos definidos aqui sao copiados internamente para o Objeto formData
    formRules: {
      fullName: {
        required: true
      },

      shortName: {
        required: true
      },

      email: {
        required: true
      },



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
    this.formData = this.igreja
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    // Este metodo e um exemplo de metodo invocado pelo evento submitted
    // do componente <ajax-form>
    submittedForm: async function() {
      // Tudo aqui sera processado somente se a requisicao enviada
      // obtiver 200 OK como resposta.
      this.cloudSuccess = true
      this.message.severity = `success`
      this.message.summary = `Sucesso`
      this.message.details = ``

    },

    goToBack: async function () {
      this.goto('/church/search-church')
    },

    update: function () {
      this.goto('/church/search-church')
    },

    remover: async function () {
      Cloud.deleteChurch.with({id: this.igreja.id}).then(result=>{
        console.log(JSON.stringify(result))
        this.message.severity = `success`
        this.message.summary = `Removido com sucesso`
        this.message.details = ``

      }).catch(err=>{
        this.message.severity = `error`
        this.message.summary = `Impossivel remover`
        this.message.details = `A Igreja principal (MOTHER) não pode ser removida!`
        console.log(err)
      })

    },

    removeMeeting: function (meet) {
      const index = this.igreja.churchMeetings.indexOf(meet)
      this.igreja.churchMeetings.splice(index,1)
    },
    
    removeLearning: function (learning) {
      const index = this.igreja.churchLearnings.indexOf(learning)
      this.igreja.churchLearnings.splice(index,1)
    },

    removeFacility: function (facility){
      const index = this.igreja.churchFacilities.indexOf(facility)
      this.igreja.churchFacilities.splice(index,1)
    }


  }
})
