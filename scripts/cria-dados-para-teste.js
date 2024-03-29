module.exports = {


  friendlyName: 'Cria Dados',


  description: 'Cria e adiciona ao banco de dados alguns dados para teste',

  extendedDescription: `

  Este é um recurso sails que pode ser executado na console / terminal / shell do desenvolvedor.
  Modifique-o para adicionar novos dados a medida em que seu Protótipo for evoluíndo em funcionalidades.

  Para executá-lo, digite em um terminal, a partir da raíz do Protótipo: [sails run cria-dados-para-teste]

  `,


  fn: async function () {


    sails.log('Running custom shell script... (`sails run cria-dados-para-teste`)')

    const {faker} = require('@faker-js/faker')

    let user = {}
    if (await User.count() > 0) {
      let users = await User.find()
      user = users[0]
      console.log(`Usuario encontrado`)
    } else {
      user = await User.create(
        {
          emailAddress: 'admin@example.com',
          fullName: 'Ryan Dahl',
          isSuperAdmin: true,
          password: await sails.helpers.passwords.hashPassword('abc123')
        },
      ).fetch()
      console.log(`Usuario created`)
    }

    let mother = await Church.create({
      fullName: faker.company.name(),
      shortName: faker.company.buzzNoun(),
      email: faker.internet.email(),
      address: faker.location.streetAddress(),
      site: faker.internet.url(),
      phone: faker.phone.number(),
      linktree: `https://linktr.ee/fake-cuidado-cristao-mother`,
      tipo: 'MOTHER',
      ourCommunityText: faker.lorem.paragraph(),
      churchMissionText: faker.lorem.paragraph(),
      joinToGroupText: faker.lorem.paragraph(),
      churchBeliefsText: faker.lorem.paragraph(),
      churchFacilities: await sails.helpers.geraListaPalavras(3, 4),
      churchLearnings: await sails.helpers.geraListaPalavras(3, 5),
      churchMeetings: await sails.helpers.geraListaPalavras(3, 3),
    }).fetch()
    console.log(`Igreja MOTHER created`)

    let daugther = await Church.create({
      fullName: faker.company.name(),
      shortName: faker.company.buzzNoun(),
      email: faker.internet.email(),
      address: faker.location.streetAddress(),
      site: faker.internet.url(),
      phone: faker.phone.number(),
      linktree: `https://linktr.ee/fake-cuidado-cristao-daughther`,
      tipo: 'DAUGHTER',
      church: mother.id
    }).fetch()
    console.log(`Igreja DAUGHTER created`)

    for (let i = 1; i < 5; i++) {
      await Classroom.create({
        name: faker.lorem.word(),
        local: faker.lorem.word() + `, #` + faker.number.int(),
        church: daugther.id
      })
    }
    console.log(`Classroom created`)

    for (let i = 1; i < 5; i++) {
      await Contribution.create({
        dtContribution: new Date(),
        value: faker.commerce.price(),
        propose: faker.commerce.productDescription(),
        user: user.id
      })
      console.log(`Contribution #${i} created`)

    }

    for (let i = 1; i < 5; i++) {
      await Usercare.create({
        dtContact: new Date(),
        record: faker.lorem.paragraph({min: 1, max: 3}),
        user: user.id
      })
      console.log(`Usercare #${i} created`)
    }

    for (let i = 1; i < 5; i++) {
      let users = []
      users.push(user.id)
      await SocialService.create({
        nome: faker.company.buzzPhrase(),
        descricao: faker.lorem.paragraph(),
        users: users
      })
      console.log(`SocialService #${i} created`)
    }


    // eslint-disable-next-line no-undef
    await Sermon.createEach([
      {
        titulo: faker.lorem.words(3),
        comentario: faker.lorem.paragraph(),
        videoUrl: 'https://www.youtube.com/embed/oxmA4NtqR7s?si=pzjvV0CgJsLpaiLE',
        church: mother.id
      },
      {
        titulo: faker.lorem.words(3),
        comentario: faker.lorem.paragraph(),
        videoUrl: 'https://www.youtube.com/embed/MqBsFnFCeHM?si=3OGv9llRtfj8F2RP',
        church: mother.id
      },
      {
        titulo: faker.lorem.words(3),
        comentario: faker.lorem.paragraph(),
        videoUrl: 'https://www.youtube.com/embed/t-jAhs-2BYI?si=BYASQkvLOQC1YYcS',
        church: mother.id
      },
    ])
    console.log(`Sermoes created`)

    await Resource.createEach([
      {name: `Chevrollet Cabin 500T`, tipo: `Vehicle`, detail: `To be used by Sisters`},
      {name: `Room #1`, tipo: `Room`, detail: `With 30 sq, green walls and air conditioning`},
    ])
    console.log(`Resources created`)


    sails.log('Finished custom shell script... (`sails run cria-dados-para-teste`)')


  }


}

