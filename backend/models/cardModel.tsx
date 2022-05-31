import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({
    question : {
        type: String,
        required: true
    },

    answer : {
        type: String,
        required: true
    }
})

const Card = mongoose.model('Card', cardSchema)

export default Card