'use strict'

const holidays = require('./holidays/')

const holiday = obj => {
  const date = new Date()
  const {year = date.getFullYear(), month, day, country = 'us'} = obj

  return new Promise((resolve, reject) => {
    if (!holidays[year]) {
      reject('There are no holidays for this year')
    }

    if (month > 12 || day > 31) {
      reject('Invalid date')
    }

    if (!month && !day) {
      resolve(traverseObj(holidays[year][country], []))
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

// recursive function to traverse the holidays object and get all the names
function traverseObj(obj, array) {
  for (const prop in obj) {
    if (typeof obj[prop] === 'object') {
      traverseObj(obj[prop], array)
    } else {
      array.push(obj[prop])
    }
  }
  return array
}

module.exports = holiday
