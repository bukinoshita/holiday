'use strict'

import test from 'ava'
import holiday from './../'

test('should invalid month', async t => {
  const res = await holiday(13).catch(err => err)

  t.is(res, 'Invalid date')
})

test('should return invalid day', async t => {
  const res = await holiday(1, 32).catch(err => err)

  t.is(res, 'Invalid date')
})

test('should return a holiday', async t => {
  const res = await holiday(1, 1).then(res => res)

  t.true(res.title.length > 0)
})

test('should return that a non-holiday day', async t => {
  const res = await holiday(1, 3).then(res => res)

  t.falsy(res)
})

test('should return a br holiday', async t => {
  const res = await holiday(1, 1, 'br').then(res => res)

  t.true(res.title.length > 0)
})

test('should return a list of holidays for the year when month and day is undefined', async t => {
  const res = await holiday(undefined, undefined, 'us').then(res => res)

  t.true(res.length === 15)
})
