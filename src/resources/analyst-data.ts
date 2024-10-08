import type { AnalystDataType, AnalystObjectType } from "../types";
import Resource from "./resource";

export default class AnalystData extends Resource {

    // * List analyst data
    async list(type: AnalystDataType) {
        return this.client.get(`/analystData/index/${type}`);
    }

    // * Get analyst data by id
    async get(type: AnalystDataType, id: string) {
        return this.client.get(`/analystData/view/${type}/${id}`);
    }

    // * Add analyst data
    // TODO: Add type for data
    async add(type: AnalystDataType, objectId: string, objectType: AnalystObjectType, data: any) {
        return this.client.post(`/analystData/add/${type}/${objectId}/${objectType}`, data);
    }

    // * Edit analyst data
    // TODO: Add type for data
    async edit(type: AnalystDataType, id: string, data: any) {
        return this.client.post(`/analystData/edit/${type}/${id}`, data);
    }

    // * Delete analyst data
    async delete(type: AnalystDataType, id: string) {
        return this.client.delete(`/analystData/delete/${type}/${id}`);
    }

}