import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology : true,
            useNewUrlParser : true,
            useCreateIndex : true,
            useFindAndModify: false
        }) 

        console.log(`MongoDB connected: ${connection.connection.host}`)
    }

    catch (error) {
        console.log(error)
    }
}
