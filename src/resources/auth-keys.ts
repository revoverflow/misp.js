import Resource from "./resource";
import type { AuthKeySearchParams } from "../types";

export default class AuthKeys extends Resource {

    // * List auth keys
    async list() {
        return this.client.get(`/auth_keys`);
    }

    // * Search auth keys
    async search(params: AuthKeySearchParams = {}) {
        return this.client.post(`/auth_keys`, params);
    }

    // * Get auth key by id
    async get(id: string) {
        return this.client.get(`/auth_keys/view/${id}`);
    }

    // * Add auth key
    async add(data: any) {
        return this.client.post(`/auth_keys/add`, data);
    }

    // * Edit auth key
    async edit(id: string, data: any) {
        return this.client.post(`/auth_keys/edit/${id}`, data);
    }

    // * Delete auth key
    async delete(id: string) {
        return this.client.delete(`/auth_keys/delete/${id}`);
    }

}