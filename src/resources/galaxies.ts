import Resource from "./resource";

export default class Galaxies extends Resource {

    // * List galaxies
    async list() {
        return this.client.get(`/galaxies`);
    }

    // * Search galaxies
    async search(value: string) {
        return this.client.post(`/galaxies/search`, { value });
    }

    // * Get galaxy by id
    async get(id: string) {
        return this.client.get(`/galaxies/view/${id}`);
    }

    // * Import galaxy cluster
    // TODO: Add type for data
    async import(data: any) {
        return this.client.post(`/galaxies/import`, data);
    }

    // * Export galaxy cluster
    // TODO: Add type for data
    async export(id: string, data: any) {
        return this.client.post(`/galaxies/export/${id}`, data);
    }

    // * Delete galaxy
    async delete(id: string) {
        return this.client.delete(`/galaxies/delete/${id}`);
    }

    // * Attach galaxy cluster tag to entity
    // TODO: Add type for data
    async attach(attachTargetId: string, attachTargetType: string, local: boolean, data: any) {
        return this.client.post(`/galaxies/attachCluster/${attachTargetId}/${attachTargetType}/local:${local}`, data);
    }

}