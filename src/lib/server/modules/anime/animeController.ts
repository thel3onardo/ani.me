import { AnimeModel } from './animeModel'
import type { AnimeBody } from './anime.types'
import { json } from '@sveltejs/kit'

export const getAnime = async () => {
    try {
        const anime = await AnimeModel.find({})

        return json({
            status: 200,
            body: {
                data: anime,
            },
        })
    } catch (err) {
        return json({
            status: 500,
            error: err,
        })
    }
}

export const insertAnime = async ({ name, description }: AnimeBody) => {
    try {
        const test = await AnimeModel.create({ name, description })

        return json({
            status: 401,
            body: test,
        })
    } catch (err) {
        return json({
            status: 500,
            error: err,
        })
    }
}
