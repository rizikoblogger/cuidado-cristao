module.exports = {


  friendlyName: 'Save resource',


  description: '',


  inputs: {
    id: {type: `string`},
    tipo: {type: `string`, description: `Funcional Type of this resource`, example: `Classroom, Restaurant, Vehicle`},
    name: {type: `string`, description: `The main name or alias of resource`},
    detail: {type: `string`, description: `Any additional information about it`},
    location: {type: `string`},
    church: {type: `ref`, description: `Church Object`}
  },


  exits: {
    success: {
      description: `Done`
    }
  },


  fn: async function (inputs) {

    const church = inputs.church;

    if (inputs.id) {
      return await Resource.updateOne({id: inputs.id}, {
        tipo: inputs.tipo,
        name: inputs.name,
        detail: inputs.detail,
        location: inputs.location,
        church: church.id
      });
    } else {
      return await Resource.create({
        tipo: inputs.tipo,
        name: inputs.name,
        detail: inputs.detail,
        location: inputs.location,
        church: church.id
      });
    }

  }


};
