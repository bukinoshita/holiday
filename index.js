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
    } else if (!month && !day) {
      if (holidays[country]) {
        resolve(traverseObj(holidays[country], []))
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
