'use strict'

const holidays = require('./holidays/2017')

const holiday = (month, day, country = 'us') => {
  return new Promise((resolve, reject) => {
    if (month > 12 || day > 31) {
      reject('Invalid date')
    }

    if (month && day) {
      if (holidays[country][month]) {
        resolve(holidays[country][month][day])
      }

      reject(false)
    } else if (month) {
      if (holidays[country][month]) {
        resolve(holidays[country][month])
      }

      reject(false)
    }
  })
}

module.exports = holiday
