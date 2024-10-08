import { LogSearchParams } from "../types";
import Resource from "./resource";

export default class Logs extends Resource {
    
    // * Search logs
    public async search(params: LogSearchParams = {}) {
        return this.client.post(`/admin/logs`, params);
    }

}