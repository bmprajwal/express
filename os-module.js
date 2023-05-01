const os = require('os')

const userInfo = os.userInfo()
console.log(userInfo)

console.log(`The system has been running for ${os.uptime} seconds`)

const currentOS = {
    name : os.type(),
    release: os.release(),
    version: os.version(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)