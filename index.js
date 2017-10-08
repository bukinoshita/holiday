'use strict'

const spacetime = require('spacetime')

const holidays = require('./holidays')

module.exports = ({ country = 'us', range = 'day' } = {}) => {
  const today = spacetime.today()
  const s = new spacetime(today)
  const year = s.year()
  const month = s.monthName()
  const date = s.date()

  return new Promise(resolve => {
    country = country === 'br' ? country : 'us'

    if (range === 'year') {
      resolve(holidays[year][country])
    }

    if (range === 'month') {
      resolve(holidays[year][country][month])
    }

    resolve(holidays[year][country][month][date])
  })
}
