import type { EventRestSearchParams, EventIndexParams } from '../types';
import Resource from './resource';

export default class Events extends Resource {

    // * List events
    async list() {
        return this.client.get(`/events`);
    }

    // * (restSearch) Search events
    async restSearch(params: EventRestSearchParams = {}) {
        return this.client.post(`/events/restSearch`, params);
    }

    // * (index) Search events
    async index(params: EventIndexParams = {}) {
        return this.client.post(`/events/index`, params);
    }

    // * Get event by id
    async get(id: string) {
        return this.client.get(`/events/view/${id}`);
    }

    // * Add event
    // TODO: Add type for data
    async add(data: any) {
        return this.client.post(`/events/add`, data);
    }

    // * Edit event
    // TODO: Add type for data
    async edit(id: string, data: any) {
        return this.client.put(`/events/edit/${id}`, data);
    }

    // * Delete event
    async delete(id: string) {
        return this.client.delete(`/events/delete/${id}`);
    }

    // * Publish event
    async publish(id: string) {
        return this.client.post(`/events/publish/${id}`);
    }

    // * Unpublish event
    async unpublish(id: string) {
        return this.client.post(`/events/unpublish/${id}`);
    }

    // * Add event tag
    async addTag(id: string, tag: string, local: boolean) {
        return this.client.post(`/events/addTag/${id}/${tag}/local:${local}`);
    }

    // * Remove event tag
    async removeTag(id: string, tag: string) {
        return this.client.post(`/events/removeTag/${id}/${tag}`);
    }

}