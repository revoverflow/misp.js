import type { ObjectSearchParams } from "../types";
import Resource from "./resource";

export default class Objects extends Resource {

    // * List objects
    async search(params: ObjectSearchParams) {
        return this.client.post(`/objects/restsearch`, params);
    }

    // * Add object to an event
    async add(eventId: string, objectTemplateId: string, data: any) {
        return this.client.post(`/objects/add/${eventId}/${objectTemplateId}`, data);
    }

    // * Get object by id
    async get(id: string) {
        return this.client.get(`/objects/view/${id}`);
    }

    // * Delete object
    async delete(id: string) {
        return this.client.delete(`/objects/delete/${id}`);
    }

}