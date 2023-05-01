const express = require('express')
const app = express()
const logger = require('./logger.js')
const authorize = require('./authorize.js')
const morgan = require('morgan')
// req => middleware => res

// middle ware function - either make a brutal send or terminate using next() func

// applies the middleware function to all the get methods after the function is invoked 
// so middleware fn should be at the top 
// can specify a path so that it will be applied to methods to that path and it's sub paths
// app.use(logger)

// app.use('/api', logger)
// logger function will be only applied to api page and its sub but not to pages before it like '/' (home)

// middleware
// 1. user - logger, authorize
// 2. express - as used in exp-basics ie, app.use(express.static('./public')) here static is a middleware fn
// 3. third party middleware fn - most common is morgan module

// using third party mware
// app.use(morgan('tiny'))



// sending multiple mwares 
app.use([logger, authorize])


app.get('/api', (req, res) => {
    res.send('Api page')
})
app.get('/api/products', (req, res) => {
    res.send('Products')
})
app.get('/api/items', (req, res) => {
    res.send('Items')
})


app.get('/', (req, res) => {
    res.send('HomePage')
})

// using middleware function in the get 
// app.get('/', logger, (req, res) => {
//     res.send('HomePage')
// })
app.get('/about', (req, res) => {
    res.send('About')
})

app.listen(5000, () => {
    console.log('Server is running on port 5000...')
})