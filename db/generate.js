module.exports = () => {
  let faker = require('faker')
  faker.locale = 'zh_CN'
  let _ = require('lodash')
  return {
    // testapi: _.times(10, n => {
    //   return {
    //     people: {
    //       id: n,
    //       name: faker.name.firstName() + faker.name.lastName(),
    //       avatar: faker.image.avatar(),
    //       phone: faker.phone.phoneNumberFormat(),
    //       images: [
    //         faker.image.image(),
    //         faker.image.image(),
    //         faker.image.image()
    //       ]
    //     },
    //     swiperImages: [
    //       {
    //         url: faker.image.image()
    //       },
    //       {
    //         url: faker.image.image()
    //       },
    //       {
    //         url: faker.image.image()
    //       },
    //       {
    //         url: faker.image.image()
    //       }
    //     ]
    //   }
    // })
    swiperImages: _.times(5, n => {
      return {
        url: faker.image.image()
      }
    })
  }
}