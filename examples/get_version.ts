import { Client } from '../src'

const client = new Client(process.env.MISP_URL!, process.env.MISP_API_KEY!);

(async () => {
    const version = await client.servers.version();
    console.log(version);
})();