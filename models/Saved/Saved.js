module.exports = (Schema, model) => model('Saved', new Schema({
    title: String,
    authors: String,
    description: String,
    image: String,
    link: String,
    favorite: Boolean
}))
