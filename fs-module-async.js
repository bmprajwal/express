const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt', `Result: ${first}, ${second}\n`,{flag: 'a'} , (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            //this does not print anything (undefined)
            // console.log(result)

            console.log('done with the task')
        })
    })
})

console.log('starting the next task')
// famous callback hell 