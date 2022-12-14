import { MongoClient } from "mongodb";
import { env } from "$env/dynamic/private";

const client = new MongoClient(env.SECRET_MONGO_URI);

await client.connect();

export default client.db('test');