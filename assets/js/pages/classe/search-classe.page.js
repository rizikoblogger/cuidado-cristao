parasails.registerPage('search-classe', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    message: {
      severity: '',
      summary: '',
      details: ''
    }
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    //…
  },
  mounted: async function() {
    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    goback: function () {
      this.goto('/welcome')
    },
    joinTo: function(classe){
      Cloud
        .saveUserClasse(this.me.id, classe.id)
        .then(result=>{
          this.message = {severity: `success`, summary: `Adicionado com sucesso`, details: ``}
          console.log(result)
        })
        .catch(err=>{
          this.message = {severity: `error`, summary: `Impossivel adicionar`, details: ``}
          console.log(err)
        })
    },
    leave: function(classe){
      Cloud
        .removeUserClasse(this.me.id, classe.id)
        .then(result=>{
          this.message = {severity: `success`, summary: `Removido com sucesso`, details: ``}
          console.log(result)
        })
        .catch(err=>{
          this.message = {severity: `error`, summary: `Impossivel remover`, details: ``}
          console.log(err)
        })
    },
    cleanMessage: function () {
      this.message = {}
      window.location.reload()
    },
    edit: function (classe) {
      this.goto(`/classe/edit-classe/${classe.id}`)
    }
  }
})
