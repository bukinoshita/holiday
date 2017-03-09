'use strict'

import test from 'ava'
import holiday from './../'

test('should invalid month', async t => {
  const res = await holiday({month: 13}).catch(err => err)

  t.is(res, 'Invalid date')
})

test('should return invalid day', async t => {
  const res = await holiday({month: 1, day: 32}).catch(err => err)

  t.is(res, 'Invalid date')
})

test('should return a holiday', async t => {
  const res = await holiday({month: 1, day: 1}).then(res => res)

  t.true(res.title.length > 0)
})

test('should return that a non-holiday day', async t => {
  const res = await holiday({month: 1, day: 3}).then(res => res)

  t.falsy(res)
})

test('should return a br holiday', async t => {
  const res = await holiday({month: 1, day: 1, country: 'br'}).then(res => res)

  t.true(res.title.length > 0)
})

test('should return a list of holidays for the year when month and day is undefined', async t => {
  const res = await holiday({country: 'us'}).then(res => res)

  t.true(res.length > 15)
})

test('should not return holidays for year 2099', async t => {
  const res = await holiday({year: 2099}).catch(err => err)

  t.is(res, 'There are no holidays for this year')
})
