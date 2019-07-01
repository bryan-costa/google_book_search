const { Schema, model } = require('mongoose')

const db = {
    Saved: require('./Saved.js')(Schema, model)
}

module.exports = db