const EventEmitter = require('events')
// EventEmitter is a class

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, age) => {
    console.log(`data recieved: ${name}, ${age}`)
})

// customEmitter.emit('response')
// below response wont run cause emit is done before it
customEmitter.on('response', () => {
    console.log('some other data')
})

customEmitter.emit('response', 'prajwal', 19)