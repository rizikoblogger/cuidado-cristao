parasails.registerPage('edit-contribution', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    showDateField: false  ,
    message: { severity: ``, summary: ``} 
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {    
    
  },
  mounted: async function() {
    this.contribution.value = Number(this.contribution.value).toFixed(2)
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    formatValue: function() {
      this.contribution.value = Number(this.contribution.value).toFixed(2)
    },
    updateDate: function () {
      this.dateContribution = new Date() // this.contribution.dtContribution = new Date()
      this.showDateField = true
    },
    cancel: function () {
      this.goto(`/contribution/search-contribution`)
    },
    save: function () {
      Cloud.saveContribution.with({
        id: this.contribution.id | undefined,
        dtContribution:this.contribution.dtContribution,    
        value: this.contribution.value,    
        propose: this.contribution.propose,    
        user: this.contribution.user
      })
      .then(result=>{
        this.message.severity = `success`
        this.message.summary = `Saved successfully`
      })
      .catch(err=>{
        this.message.severity = `error`,
        this.message.summary = `Error on saving`
      })
    },

    cleanMessage: function () {
      this.message = {}
      this.goto(`/contribution/search-contribution`)
    }
  }
});
