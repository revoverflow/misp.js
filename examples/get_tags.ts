import { Client } from '../src'

const client = new Client(process.env.MISP_URL!, process.env.MISP_API_KEY!);

(async () => {
    const tags = await client.tags.search('%a%');
    console.log(tags);
})();