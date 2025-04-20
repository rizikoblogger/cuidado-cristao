parasails.registerPage('edit-sermon', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    message: {
      severity: ``,
      summary: ``,
      details: ``
    },   
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function () {
    //…
  },
  mounted: async function () {
    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    cancel: function () {
      this.goto('/sermon/search-sermon')
    },

    selectChurch: function (church) {     
      this.sermon.church = church
    },

    save: function (sermon) {

      if (sermon.titulo.length < 3 || sermon.comentario.length < 5 || sermon.videoUrl.length < 5) {
        alert(`Complete required data`)
        return
      }

      Cloud.saveSermon.with({
        id: sermon.id,
        titulo: sermon.titulo,
        comentario: sermon.comentario,
        videoUrl: sermon.videoUrl,
        church: sermon.church.id
      })
        .then(result => {
          this.message = { severity: `success`, summary: `Saved Successfully`, details: `` }
        })
        .catch(err => {
          console.log(err)
          this.message = { severity: `error`, summary: `Error on saving`, details: `` }
        })
    },

    cleanMessage: function () {
      this.message = {}
      this.goto('/sermon/search-sermon')
  
    }

  }

  
})
