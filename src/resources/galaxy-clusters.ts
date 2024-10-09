import Resource from "./resource";
import { GalaxyClusterSearchFilter } from "../types";

export default class GalaxyClusters extends Resource {

    // * List galaxy clusters
    async list(galaxyId: string) {
        return this.client.get(`/galaxy_clusters/index/${galaxyId}`);
    }

    // * Search galaxy clusters
    async search(galaxyId: string, params: GalaxyClusterSearchFilter) {
        return this.client.post(`/galaxy_clusters/index/${galaxyId}`, params);
    }

    // * Get galaxy cluster by id
    async get(clusterId: string) {
        return this.client.get(`/galaxy_clusters/view/${clusterId}`);
    }

    // * Add galaxy cluster
    async add(galaxyId: string, data: any) {
        return this.client.post(`/galaxy_clusters/add/${galaxyId}`, data);
    }

    // * Edit galaxy cluster
    async edit(clusterId: string, data: any) {
        return this.client.post(`/galaxy_clusters/edit/${clusterId}`, data);
    }

    // * Publish galaxy cluster
    async publish(clusterId: string) {
        return this.client.post(`/galaxy_clusters/publish/${clusterId}`);
    }

    // * Unpublish galaxy cluster
    async unpublish(clusterId: string) {
        return this.client.post(`/galaxy_clusters/unpublish/${clusterId}`);
    }
    
    // * Delete galaxy cluster
    async delete(clusterId: string) {
        return this.client.post(`/galaxy_clusters/delete/${clusterId}`);
    }

    // * Restore galaxy cluster
    async restore(clusterId: string) {
        return this.client.post(`/galaxy_clusters/restore/${clusterId}`);
    }
    
}