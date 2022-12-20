import { json } from '@sveltejs/kit'
import { connectDb } from '$lib/server/database/database.server'

/** @type {import('./$types').RequestHandler} */
export async function POST({ url, request }) {
    await connectDb()

    const requestResult = await request.json()
    console.log('requestResult', requestResult)
    console.log('url', url)
    return json({
        status: 201,
        body: {
            message: 'created',
        },
    })
}
