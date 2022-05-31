import mongoose from 'mongoose'

const cardSetSchema = mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    setName : {
        type: String,
        required: true,
    },

    cards : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Card'
        }
    ]

})

const CardSet = mongoose.model('CardSet', cardSetSchema)

export default CardSet