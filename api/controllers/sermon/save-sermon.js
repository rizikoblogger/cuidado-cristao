module.exports = {


  friendlyName: 'Save sermon',


  description: '',


  inputs: {
    id: { type: 'string' },
    titulo: { type: 'string', required: true, description: 'Um titulo que será mostrado acima do video incorporado' },
    comentario: { type: 'string', required: false, description: 'Um comentario que será mostrado abaixo do vídeo incorporado' },
    videoUrl: { type: 'string', description: 'um caminho completo do video que será incorporado', example: 'https://www.youtube.com/embed/oxmA4NtqR7s?si=pzjvV0CgJsLpaiLE' },
    church: {
      type: 'string', description: 'neste caso, o id do modelo model/Church.js associado'
    }
  },


  exits: {
    success: {
      description: 'Done'
    }

  },


  fn: async function (inputs) {

    if (inputs.id) {
      const sermon = await Sermon.updateOne({ id: inputs.id },
        {
          titulo: inputs.titulo,
          comentario: inputs.comentario,
          videoUrl: inputs.videoUrl,
          church: inputs.church
        })
      return { sermon }
    } else {
      const sermon = await Sermon.create(
        {
          titulo: inputs.titulo,
          comentario: inputs.comentario,
          videoUrl: inputs.videoUrl,
          church: inputs.church
        }).fetch()
      return { sermon }
    }


  }
}