import { WarningListSearchParams, WarningListToggleParams } from "../types";
import Resource from "./resource";

export default class Noticelists extends Resource {
    
    // * Get noticelists
    public async list() {
        return this.client.get(`/noticelists`);
    }

    // * Get noticelist by id
    public async get(id: string) {
        return this.client.get(`/noticelists/view/${id}`);
    }

    // * Enable or disable noticelist
    public async toggle(id: string) {
        return this.client.post(`/noticelists/toggleEnable/${id}`);
    }

    // * Update noticelists
    public async update() {
        return this.client.post(`/noticelists/update`);
    }

}