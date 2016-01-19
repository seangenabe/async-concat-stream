'use strict'

const concat = require('concat-stream')

module.exports = function asyncConcatStream(opts) {
  let ret
  let promise = new Promise(resolve => {
    ret = concat(opts, resolve)
  })
  ret.promise = promise
  return ret
}

module.exports.from = function asyncConcatStreamFrom(readable, opts) {
  return new Promise((resolve, reject) => {
    readable.on('error', reject)
    readable.pipe(concat(opts, resolve))
  })
}
