import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'


const userSchema = mongoose.Schema({
    firstName : {
        type: String
    },

    lastName: {
        type: String
    },

    username : {
        type: String,
        required: true,
        unique: true
    },
    
    password : {
        type: String,
        required: true
    },

    isAdmin: {
        type: Boolean, 
        default: false
    }

})

// cannot use arrow as they have different definition of 'this'

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
    if (! this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)

})

const userModel = mongoose.model('User', userSchema)

export default userModel