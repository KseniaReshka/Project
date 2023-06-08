// 1. У любого пользователя будет как минимум в БД qualities & professions
// 2. Они равны mock данным
// const Profession = require('../models/Profession')
// const Quality = require('../models/Quality')
// const professionMock = require('../mock/professions.json')
// const qualitiesMock = require('../mock/qualities.json')

const eventMock = require('../mock/events.json')
const holidayMock = require('../mock/holiday.json')
const cityMock = require('../mock/cities.json')
const City = require('../models/City')
const Event = require('../models/Event')
const Holiday= require('../models/Holiday')

module.exports = async () => {
  // const professions = await Profession.find()
  // if (professions.length !== professionMock.length) {
  //   await createInitialEntity(Profession, professionMock)
  // }

  // const qualities = await Quality.find()
  // if (qualities.length !== professionMock.length) {
  //   await createInitialEntity(Quality, qualitiesMock)
  // }

  const cities = await City.find()
  if (cities.length !== cityMock.length) {
    await createInitialEntity(City, cityMock)
  }

  const events = await Event.find()
  if (events.length !== eventMock.length) {
    await createInitialEntity(Event, eventMock)
  }

  const holidays = await Holiday.find()
  if (holidays.length !== holidayMock.length) {
    await createInitialEntity(Holiday, holidayMock)
  }
}



async function createInitialEntity(Model, data) {
  console.log("dataINITDATA", data);
  await Model.collection.drop()
  return Promise.all(
    data.map(async item => {
      try {
        delete item._id
        const newItem = new Model(item)
        console.log("newItem", newItem)
        await newItem.save()
        return newItem
      } catch (e) {
        return e
      }
    })
  )
}