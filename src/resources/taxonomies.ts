import Resource from "./resource";

export default class Taxonomies extends Resource {
    
    // * Get taxonomies
    public async list() {
        return this.client.get(`/taxonomies`);
    }

    // * Get taxonomy by id
    public async get(id: string) {
        return this.client.get(`/taxonomies/view/${id}`);
    }

    // * Enable taxonomy
    public async enable(id: string) {
        return this.client.post(`/taxonomies/enable/${id}`);
    }

    // * Disable taxonomy
    public async disable(id: string) {
        return this.client.post(`/taxonomies/disable/${id}`);
    }
    
    // * Update taxonomies
    public async update() {
        return this.client.post(`/taxonomies/update`);
    }

    // * Get a taxonomy extended with tags used in events and attributes
    public async getWithTags(id: string) {
        return this.client.get(`/taxonomies/taxonomy_tags/${id}`);
    }

    // * Export taxonomy
    public async export(id: string) {
        return this.client.get(`/taxonomies/export/${id}`);
    }

}