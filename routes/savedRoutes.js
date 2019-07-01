const { Saved } = require('../models/Saved')
const axios = require('axios')

module.exports = app => {
    app.get('/books', (req, res) => {
        Saved.find({})
            .then(books => res.json(books))
            .catch(e => console.log(e))
})
}
