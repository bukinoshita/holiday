'use strict'

import test from 'ava'
import m from '.'

test('range year', async t => {
  const holiday = await m({ range: 'year' })

  t.truthy(holiday)
})

test('range month', async t => {
  const holiday = await m({ range: 'month' })

  t.truthy(holiday)
})
