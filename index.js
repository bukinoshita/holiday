'use strict'

const holidays = require('./holidays/')

const holiday = (opts = {}) => {
  const date = new Date()
  const {year = date.getFullYear(), month, day, country = 'us'} = opts

  return new Promise((resolve, reject) => {
    if (!holidays[year]) {
      reject('There are no holidays for this year')
    }

    if (month > 12 || day > 31) {
      reject('Invalid date')
    }

    if (!month && !day) {
      resolve(holidays[year][country])
    }

    if (month && day) {
      if (holidays[year][country][month]) {
        resolve(holidays[year][country][month][day])
      }

      reject(false)
    } else if (month) {
      if (holidays[year][country][month]) {
        resolve(holidays[year][country][month])
      }

      reject(false)
    }
  })
}

module.exports = holiday
