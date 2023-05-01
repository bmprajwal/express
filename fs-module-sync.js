const {readFileSync, writeFileSync} = require('fs')

console.log('start')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

// console.log(first, second)

// writeFileSync('./content/result.txt', `Result: ${first}, ${second}`)

//to append the text to the existing file set the flag option to 'a'
writeFileSync('./content/result-sync.txt', `Result: ${first}, ${second}\n`, {flag: 'a'})

console.log('done with the task')
console.log('starting new task')