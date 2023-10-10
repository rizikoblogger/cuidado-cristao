const {faker} = require('@faker-js/faker')
module.exports = {


  friendlyName: 'Cria dados para teste',


  description: '',


  fn: async function () {


    sails.log('Running custom shell script... (`sails run cria-dados-para-teste`)')

    const {faker} = require('@faker-js/faker')

    let user = {}
    if(await User.count() > 0) {
      let users = await User.find()
      user = users[0]
    }else{
      user = await User.create(
        { emailAddress: 'admin@example.com', fullName: 'Ryan Dahl', isSuperAdmin: true, password: await sails.helpers.passwords.hashPassword('abc123') },
      ).fetch()
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
      churchBeliefsText:faker.lorem.paragraph(),
    }).fetch()

    let church = await Church.create({
      fullName: faker.company.name(),
      shortName: faker.company.buzzNoun(),
      email: faker.internet.email(),
      address: faker.location.streetAddress(),
      site: faker.internet.url(),
      phone: faker.phone.number(),
      linktree: `https://linktr.ee/fake-cuidado-cristao-daughther`,
      tipo: 'DAUGHTER',
      churchId: mother.id
    }).fetch()

    for (let i = 1; i < 5; i++) {
      await Classroom.create({
        name: faker.lorem.word(),
        local: faker.lorem.word()+`, #`+faker.number.int(),
        churchId: church.id
      })
    }

    for (let i = 1; i < 5; i++) {
      await Contribution.create({
        dtContribution: new Date(),
        value: faker.commerce.price(),
        propose: faker.commerce.productDescription(),
        userId: user.id
      })
    }

    for (let i = 1; i < 5; i++) {
      await Usercare.create({
        userId: user.id,
        dtContact: new Date(),
        record: faker.lorem.paragraph({min: 1, max: 3})
      })
    }

    await UserChurch.create({
      churchId: church.id,
      userId: user.id,
      type: 'CONGREGATION',
      dtAssociation: new Date()
    })

    let classrooms = await Classroom.find()
    classrooms.forEach(classroom=>{
      UserClassroom.create({
        dtAssociation: new Date(),
        type: 'CLASSMATE',
        userId: user.id,
        classroomId: classroom.id
      }).then().catch(err=>console.log(err))
    })



    sails.log('Finished custom shell script... (`sails run cria-dados-para-teste`)')


  }


}

