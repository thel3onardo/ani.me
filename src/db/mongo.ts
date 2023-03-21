import mongoose from 'mongoose'
import { env } from '$env/dynamic/private'

import { AnimeModel } from '$lib/server/modules/anime/animeModel'

mongoose
    .connect(env.SECRET_MONGO_URI, { dbName: 'anime_app' })
    .then(() => console.log('Connected successfully to database!'))
    .catch((err) =>
        console.log(`Something went wrong when trying to connect to db: ${err}`)
    )

export const animes = AnimeModel
