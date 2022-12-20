import {
    insertAnime,
    getAnime,
} from '$lib/server/modules/anime/animeController'
import { connectDb } from '$lib/server/connectDb.server'

export async function POST({ url, request }) {
    await connectDb()

    return insertAnime(await request.json())
}

export async function GET({ url, request }) {
    await connectDb()

    return getAnime()
}
