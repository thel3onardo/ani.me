import { error, json } from '@sveltejs/kit'
import { animes } from '$db/mongo'
import type { IAnimeBody } from '$lib/server/modules/anime/anime.types'

export async function POST({ url, request }) {
    if (!request.body)
        throw error(500, 'Missing fields name and description in body data')

    try {
        const { name, description }: IAnimeBody = await request.json()

        await animes.create({ name, description })

        return json({
            status: 401,
            body: 'New anime inserted successfully',
        })
    } catch (err: any) {
        return json({
            status: 500,
            error: err?.message,
        })
    }
}

export async function GET({ url, request }) {
    try {
        const anime = await animes.find({})

        return json({
            status: 200,
            body: {
                data: anime,
            },
        })
    } catch (err: any) {
        return json({
            status: 500,
            error: err,
        })
    }
}
