const express = require('express')
const { products, people } = require('../data.js')

const app = express()

app.get('/', (req, res) => {
    res.send('<h1><a href="/api">Go to api page</a></h1>')
})

app.get('/api', (req, res) => {
    res.send('<h2><a href="/api/products"> Products API</a></h2> <br> <h2><a href="/api/people"> People API</a></h2>')
})


app.get('/api/products', (req, res) => {

    // getting only id, name and image of product
    const newProduct = products.map((item) => {
        const { id, name, image } = item
        return { id, name, image }
    })
    res.json(newProduct)
})

// Route params
app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params
    const singleProduct = products.find((product) => product.id === Number(productID))

    // if the requested param doesnot exist it would return undefined so add a check for that
    if (!singleProduct) {
        return res.status(404).send('Page not found')
    }

    res.json(singleProduct)
})

// Query string
app.get('/api/v1/query', (req, res) => {
    let sortedProducts = [...products]
    let { search, limit } = req.query

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.splice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        // res.status(200).send('no matching product')
        return res.status(200).json({ success: true, data: [] })
    }
    return res.json(sortedProducts)
})
app.get('/api/people', (req, res) => {
    res.json(people)
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})