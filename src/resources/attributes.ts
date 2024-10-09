import type { AttributeContext, AttributePercentage, AttributeRestSearchFilter } from "../types";
import Resource from "./resource";

export default class Attributes extends Resource {

    // * List attributes
    async list() {
        return this.client.get(`/attributes`);
    }

    // * (restSearch) Search attributes
    async restSearch(params: AttributeRestSearchFilter = {}) {
        return this.client.post(`/attributes/restSearch`, params);
    }

    // * Get attribute by id
    async get(id: string) {
        return this.client.get(`/attributes/view/${id}`);
    }

    // * Add attribute
    async add(eventId: string, data: any) {
        return this.client.post(`/attributes/add/${eventId}`, data);
    }

    // * Edit attribute
    async edit(id: string, data: any) {
        return this.client.put(`/attributes/edit/${id}`, data);
    }

    // * Delete attribute
    async delete(id: string) {
        return this.client.delete(`/attributes/delete/${id}`);
    }

    // * Restore an attribute
    async restore(id: string) {
        return this.client.post(`/attributes/restore/${id}`);
    }

    // * Add a tag to an attribute
    async addTag(id: string, tag: string, local: boolean) {
        return this.client.post(`/attributes/addTag/${id}/${tag}/local:${local}`);
    }

    // * Remove a tag from an attribute
    async removeTag(id: string, tag: string) {
        return this.client.post(`/attributes/removeTag/${id}/${tag}`);
    }

    // * Get count of attributes per category
    async attributeStatistics(context: AttributeContext, percentage: AttributePercentage) {
        return this.client.get(`/attributes/attributeStatistics/${context}/${percentage}`);
    }

    // * Get a list of all attribute types
    async describeTypes() {
        return this.client.get(`/attributes/describeTypes`);
    }

}