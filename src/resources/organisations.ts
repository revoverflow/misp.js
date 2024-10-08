import Resource from "./resource";

export default class Organisations extends Resource {
    
    // * List organisations
    public async list() {
        return this.client.get(`/organisations`);
    }

    // * Get organisation by id
    public async get(id: string) {
        return this.client.get(`/organisations/view/${id}`);
    }

    // * Add organisation
    // TODO: Add type for data
    public async add(data: any) {
        return this.client.post(`/admin/organisations/add`, data);
    }

    // * Edit organisation
    // TODO: Add type for data
    public async edit(id: string, data: any) {
        return this.client.post(`/admin/organisations/edit/${id}`, data);
    }

    // * Delete organisation
    public async delete(id: string) {
        return this.client.delete(`/admin/organisations/delete/${id}`);
    }

}