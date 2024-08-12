module.exports = {


  friendlyName: 'Save classe',


  description: '',


  inputs: {
    id: {
      type: `string`
    },

    name: {
      type: 'string',
      description: 'The name of classroom.',
      required: true
    },

    local: {
      type: 'string',
      description: 'The location of class. it can be at Church or some home out there',
      required: true
    },

    church: {
      type: 'string',
      description: `ID of Object model/Church.js`
    }
  },


  exits: {

  },


  fn: async function (inputs) {

    const Classroom = sails.models.classroom

    if(inputs.id){
      await Classroom.updateOne({id: inputs.id},{
        name: inputs.name,    
        local: inputs.local,
        church: inputs.church
      })
      const classroom = await Classroom.findOne({id: inputs.id}).populate(`church`).populate(`users`)
      return {classroom}
    }else{
      const instance = await Classroom.create({
        name: inputs.name,    
        local: inputs.local,
        church: inputs.church,
        users: []
      }).fetch()
      const classroom = await Classroom.findOne({id: instance.id}).populate(`church`).populate(`users`)
      return {classroom}

    }   
    

  }


};
