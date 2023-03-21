import mongoose from 'mongoose'
import { env } from '$env/dynamic/private'

export const connectDb = (): void => {
    mongoose
        .connect(env.SECRET_MONGO_URI, { dbName: 'anime_app' })
        .then(() => console.log('Connected successfully to database!'))
        .catch((err) =>
            console.log(
                `Something went wrong when trying to connect to db: ${err}`
            )
        )

    mongoose.connection.on('disconnect', () =>
        console.log('Disconnected from db')
    )
}
