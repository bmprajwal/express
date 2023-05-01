const { createReadStream } = require('fs')

// const stream = createReadStream('./content/bigFile.txt')
const stream = createReadStream('./content/bigFile.txt', { highWaterMark: 90000 })

stream.on('data', (chunk) => {
    // console.log(`File size: ${chunk.length} bytes`)
    console.log(chunk)
})

// emit is called under the hood



// default 64kb
// last part is the remainder
// highWaterMark is used to change the default size of chunk
// use encoding option to encode the file { encoding: 'utf-8'}
