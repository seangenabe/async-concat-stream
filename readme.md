# async-concat-stream

Asynchronous [concat-stream]. Writable stream that concatenates string or binary data and returns a promise that resolves with the result.

[![npm](https://img.shields.io/npm/v/async-concat-stream.svg?style=flat-square)](https://www.npmjs.com/package/async-concat-stream)
[![Build Status](https://img.shields.io/travis/seangenabe/async-concat-stream/master.svg?style=flat-square)](https://travis-ci.org/seangenabe/async-concat-stream)
[![devDependency Status](https://img.shields.io/david/dev/seangenabe/async-concat-stream.svg?style=flat-square)](https://david-dm.org/seangenabe/async-concat-stream#info=devDependencies)
[![node](https://img.shields.io/node/v/async-concat-stream.svg?style=flat-square)](https://nodejs.org/en/download/)

## Usage

```javascript
const concat = require('async-concat-stream')
```

### concat(opts = {})

Creates a writable [concat-stream]. The `promise` property of the returned stream will be resolved when all of the data has been written to the stream.

Parameters:
* `opts` - concat-stream options

Returns: `Writable` - writable stream from concat-stream with `promise` property

Usage:
```javascript
let writable = concat()
readable.pipe(writable)
let data = await writable.promise // via ES7 async
```

### concat.from(readable, opts = {})

Convenience method to read from the specified readable stream. Also handles errors from the readable stream.

Parameters:
* `readable` - `Readable`, The readable stream
* `opts` - concat-stream options
Returns: `Promise` - resolves with the data from concat-stream

Usage:
```javascript
let data = await concat.from(readable) // via ES7 async
```

## Why make this when there are ~2 others?

I like to avoid promise modules and unnecessarily adding stuff to and hybridizing promises.

## License

MIT

[concat-stream]: https://github.com/maxogden/concat-stream
