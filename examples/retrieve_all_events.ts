import { Client } from '../src'

const client = new Client(process.env.MISP_URL!, process.env.MISP_API_KEY!);

const events = await client.events.list();

console.log(JSON.stringify(events, null, 2));