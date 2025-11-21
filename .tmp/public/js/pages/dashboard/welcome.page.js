parasails.registerPage('welcome', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    modal: '',
    pageLoadedAt: Date.now(),
    churchSelecionadaId: '',
    groupSelecionadaId: '',
    showChurchList: false,
    showGroupList: false,
    message: {
      severity: ``,
      summary: ``,
      details: ''
    },
    church: {}
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function () {
    //…
  },
  mounted: async function () {
    _.extend(this, window.SAILS_LOCALS)
    /* gets churchs array from view-welcome */
  },

  //  ╦  ╦╦╦═╗╔╦╗╦ ╦╔═╗╦    ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ╚╗╔╝║╠╦╝ ║ ║ ║╠═╣║    ╠═╝╠═╣║ ╦║╣ ╚═╗
  //   ╚╝ ╩╩╚═ ╩ ╚═╝╩ ╩╩═╝  ╩  ╩ ╩╚═╝╚═╝╚═╝
  // Configure deep-linking (aka client-side routing)
  virtualPagesRegExp: /^\/welcome\/?([^\/]+)?\/?/,
  afterNavigate: async function (virtualPageSlug) {
    // `virtualPageSlug` is determined by the regular expression above, which
    // corresponds with `:unused?` in the server-side route for this page.
    switch (virtualPageSlug) {
      case 'hello':
        this.modal = 'example'
        break
      default:
        this.modal = ''
    }
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    clickOpenExampleModalButton: async function () {
      this.goto('/welcome/hello')
      // Or, without deep links, instead do:
      // ```
      // this.modal = 'example';
      // ```
    },

    closeExampleModal: async function () {
      this.goto('/welcome')
      // Or, without deep links, instead do:
      // ```
      // this.modal = '';
      // ```
    },

    toogleChurchList: function () {
      this.showChurchList = !this.showChurchList
    },

    toogleGroupList: function () {
      this.showGroupList = !this.showGroupList
    },

    goToCreateNewChurch: function () {
      this.goto('/church-edit/new')
    },

    selecionarChurch: function (churchSelecionadaId) {
      Cloud.saveUserChurch.with({
        userId: this.me.id,
        churchId: churchSelecionadaId,
        type: 'CONGREGATION'
      }).then(result => {
        this.message = {
          severity: `success`,
          summary: `Saved successfully`,
          details: ``
        }
        this.myChurchs = []
        this.showChurchList = false


      }).catch(err => console.log(err))

    },

    selecionarGroup: function (selecionadaId) {
      Cloud.saveUserClasse.with({
        userId: this.me.id,
        classroomId: selecionadaId,
      }).then(() => {
        this.message = {
          severity: `success`,
          summary: `Saved successfully`,
          details: ``
        }
        this.showGroupList = false


      }).catch(err => console.log(err))

    },

    update: function () {
      this.message = {
        severity: ``,
        summary: ``,
        details: ''
      }
      window.location.reload()
    },

    leave: function (classe) {
      Cloud
        .removeUserClasse(this.me.id, classe.id)
        .then(result => {
          this.message = { severity: `success`, summary: `Removido com sucesso`, details: `` }
          console.log(result)
        })
        .catch(err => {
          this.message = { severity: `error`, summary: `Impossivel remover`, details: `` }
          console.log(err)
        })
    },

    gotoSearchContributions: function () {
      this.goto('/contribution/search-contribution')
    }

  }
})
