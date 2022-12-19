import mongoose from 'mongoose'
import { env } from '$env/dynamic/private'

export const dbConnection = (): void => {
    mongoose
        .connect(env.SECRET_MONGO_URI)
        .then(() => console.log('Connected successfully to database!'))
        .catch((err) =>
            console.log(
                `Something went wrong when trying to connect to db: ${err}`
            )
        )
}
