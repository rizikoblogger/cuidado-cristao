module.exports = {


  friendlyName: 'Save guideline',


  description: '',


  inputs: {

    id: {
      type: 'string'
    },

    order: {
      type: 'number',
      required: true,
      description: `Order to ordering`
    },

    title: {
      type: 'string',
      required: true,
      description: 'Title of guideline'
    },

    text: {
      type: 'string',
      required: true,
      description: `The Guideline by itself`
    },

    from: {
      type: 'string',
      required: true,
      description: 'Who issued this guideline'
    },

    tos: {
      type: 'ref',
      description: 'List of model/Classroom.js that should see this guideline'
    }
  },


  exits: {
    success: {
      description: `Done`
    }
  },


  fn: async function (inputs) {

    const Guideline = sails.models.guideline;

    if(inputs.id){
      const guideline = await Guideline.updateOne({id: inputs.id},{
        order: inputs.order,
        title: inputs.title,
        text: inputs.text,
        from: inputs.from,
        tos: []
      })
      if(inputs.tos){
        const list = []
        inputs.tos.forEach(to=>{
          list.push(to.id)
        })
        await Guideline.addToCollection(inputs.id, 'tos').members(list)
      }
      return {guideline}
    } else {
      let guideline = await Guideline.create({
        order: inputs.order,
        title: inputs.title,
        text: inputs.text,
        from: inputs.from,
        tos: []
      }).fetch()
      if(inputs.tos){
        const list = []
        inputs.tos.forEach(to=>{
          list.push(to.id)
        })
        await Guideline.addToCollection(guideline.id, 'tos').members(list)
      }
      guideline = await Guideline.findOne({id: guideline.id}).populate(`tos`)
      return {guideline}
    }
  }
};
