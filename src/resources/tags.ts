import Resource from "./resource";

export default class Tags extends Resource {

    // * List tags
    async list() {
        return this.client.get(`/tags`);
    }

    // * Search tags
    async search(term: string) {
        return this.client.post(`/tags/search/${encodeURIComponent(term)}`);
    }

    // * Get tag by id
    async get(id: string) {
        return this.client.get(`/tags/view/${id}`);
    }

    // * Add tag
    async add(data: any) {
        return this.client.post(`/tags/add`, data);
    }

    // * Edit tag
    async edit(id: string, data: any) {
        return this.client.put(`/tags/edit/${id}`, data);
    }

    // * Delete tag
    async delete(id: string) {
        return this.client.post(`/tags/delete/${id}`);
    }

}