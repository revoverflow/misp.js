import axios, { Axios } from 'axios';
import https from 'https';

import Events from './resources/events';
import Attributes from './resources/attributes';
import Users from './resources/users';
import Organisations from './resources/organisations';
import Servers from './resources/servers';
import Workers from './resources/workers';

export class Client {

    private readonly client: Axios;

    public readonly events: Events = new Events(this);
    public readonly attributes: Attributes = new Attributes(this);
    public readonly users: Users = new Users(this);
    public readonly organisations: Organisations = new Organisations(this);
    public readonly servers: Servers = new Servers(this);
    public readonly workers: Workers = new Workers(this);
    
    constructor(
        private readonly instanceUrl: string,
        private readonly apiKey: string,
        private readonly httpsAgent: https.Agent = new https.Agent({ rejectUnauthorized: false })
    ) {
        this.instanceUrl = instanceUrl;
        this.apiKey = apiKey;

        this.client = axios.create({
            baseURL: this.instanceUrl,
            httpsAgent: this.httpsAgent,
            headers: {
                'Authorization': `${this.apiKey}`,
                'Accept': 'application/json'
            }
        });
    }

    async get(path: string) {
        const response = await this.client.get(path);
        return response.data;
    }

    async post(path: string, data: any = {}) {
        const response = await this.client.post(path, data);
        return response.data;
    }

    async delete(path: string) {
        const response = await this.client.delete(path);
        return response.data;
    }

    async put(path: string, data: any) {
        const response = await this.client.put(path, data);
        return response.data;
    }

    async getVersion() {
        const response = await this.client.get('/servers/getVersion');

        return response.data;
    }

}