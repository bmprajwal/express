const authorize = (req, res, next) => {
    const { user } = req.query
    if (user == 'prajwal') {
        req.user = { name: 'prajwal' }
        console.log(req.user)
        next()
    }
    else {
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorize