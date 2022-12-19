import { json } from '@sveltejs/kit'
import { dbConnection } from '$lib/db/connect.server'

export async function GET({ url }: { url: string }) {
    const db = await dbConnection()

    const body = {
        status: 200,
        body: {
            test: 'testing',
        },
    }

    return json(body)
}
