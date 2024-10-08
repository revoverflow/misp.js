import { Client } from '../src'

const client = new Client(process.env.MISP_URL!, process.env.MISP_API_KEY!);

(async () => {
    const authKeys = await client.authKeys.list();
    console.log(authKeys);
})();