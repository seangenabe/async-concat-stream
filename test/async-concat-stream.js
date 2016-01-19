'use strict'

import test from 'ava'
import concat from '..'
import { PassThrough } from 'stream'

test('concat', async t => {
  let writable = concat()
  t.ok(writable.write)
  t.is(writable.promise.constructor.name, 'Promise')
  let source = new PassThrough({ encoding: 'utf8' })
  source.pipe(writable)
  source.write('a')
  source.write('b')
  source.end('c')
  let data = await writable.promise
  t.same(data, 'abc')
})

test('concat with opts', async t => {
  let writable = concat({ encoding: 'buffer' })
  let source = new PassThrough({ encoding: 'utf8' })
  source.pipe(writable)
  source.write('a')
  source.end('b')
  let data = await writable.promise
  t.same(data, new Buffer('ab', 'utf8'))
})

test('concat.from', async t => {
  let source = new PassThrough({ encoding: 'utf8' })
  let promise = concat.from(source)
  source.write('a')
  source.write('b')
  source.end('c')
  let data = await promise
  t.same(data, 'abc')
})

test('concat.from with opts', async t => {
  let source = new PassThrough({ encoding: 'utf8' })
  let promise = concat.from(source, { encoding: 'buffer' })
  source.write('a')
  source.end('b')
  let data = await promise
  t.same(data, new Buffer('ab', 'utf8'))
})
