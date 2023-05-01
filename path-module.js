const path = require('path')

// extra '/' are omitted 
const filePath = path.join('/content///', 'subfolder', 'test.txt')
console.log(filePath)

const sep = path.sep
console.log(sep)

const base = path.basename(filePath)
console.log(base)

const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolutePath)