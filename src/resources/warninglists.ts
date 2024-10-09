import { WarningListSearchParams, WarningListToggleParams } from "../types";
import Resource from "./resource";

export default class Warninglists extends Resource {
    
    // * Get warning lists
    public async list() {
        return this.client.get(`/warninglists`);
    }

    // * Search warning lists
    public async search(params: WarningListSearchParams) {
        return this.client.post(`/warninglists`, params);
    }

    // * Get warning list by id
    public async get(id: string) {
        return this.client.get(`/warninglists/view/${id}`);
    }

    // * Enable or disable warning lists
    public async toggle(params: WarningListToggleParams) {
        return this.client.post(`/warninglists/toggleEnable`, params);
    }

    // * Check if a list of values are in a warning list
    public async check(values: string[]) {
        return this.client.post(`/warninglists/checkValue`, values);
    }

    // * Update warning lists
    public async update() {
        return this.client.post(`/warninglists/update`);
    }

}