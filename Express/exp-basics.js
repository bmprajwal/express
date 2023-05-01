const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./public'))

// as html file is also static we dont have to write a seperate get for it instead we can dump it in the public folder 
// the server checks for the index.html as default and renders it 

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// })

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

app.all('*', (req, res) => {
    res.status(404).send('<h2>The resource you are looking for is not available!!!</h2>')
})

app.listen(5000, () => console.log('Server is listening on port 5000...'))



// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen