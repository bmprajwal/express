// const { readFile, writeFile } = require('fs')

//METHOD 4
const {readFile, writeFile} = require('fs').promises

const start = async () => {
    const first = await readFile('./content/first.txt', 'utf-8')
    const second = await readFile('./content/second.txt', 'utf-8')
    writeFile('./content/result-promise.txt', `Result: ${first} ${second}\n`)
}
start()

// METHOD 3
// const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async () => {
//     const first = await readFilePromise('./content/first.txt', 'utf-8')
//     const second = await readFilePromise('./content/second.txt', 'utf-8')
//     writeFilePromise('./content/result-promise.txt', `Result: ${first} ${second}\n`, {flag: 'a'})
// }
// start()


// METHOD 2
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, result) => {
//             if (err) {
//                 reject(error)
//             }
//             else {
//                 resolve(result)
//             }
//         })
//     })
// }
// const start = async () => {
//     const first = await getText('./content/first.txt')
//     const second = await getText('./content/second.txt')
//     console.log(first, second)
// }
// start()


// METHOD 1
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, result) => {
//             if (err) {
//                 reject(error)
//             }
//             else {
//                 resolve(result)
//             }
//         })
//     })
// }

// getText('./content/first.txt')
//  .then((res) => console.log(res))
//  .catch((err) => console.log(err))