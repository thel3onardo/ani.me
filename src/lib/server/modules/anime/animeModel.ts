import mongoose from 'mongoose'

interface IAnime {
    name: string
    description: string
    created_at: any
}

const animeSchema = new mongoose.Schema<IAnime>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    //should I really use kebac-case here?
    created_at: {
        type: Date,
        default: Date.now,
    },
})

export const AnimeModel = mongoose.model('Anime', animeSchema)
