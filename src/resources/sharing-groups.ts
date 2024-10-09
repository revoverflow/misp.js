import Resource from "./resource";

export default class SharingGroups extends Resource {
    
    // * Get sharing groups
    public async list() {
        return this.client.get(`/sharing_groups`);
    }

    // * Get sharing group by id
    public async get(id: string) {
        return this.client.get(`/sharing_groups/view/${id}`);
    }

    // * Add sharing group
    // TODO: Add type for data
    public async add(data: any) {
        return this.client.post(`/sharing_groups/add`, data);
    }

    // * Edit sharing group
    // TODO: Add type for data
    public async edit(id: string, data: any) {
        return this.client.post(`/sharing_groups/edit/${id}`, data);
    }

    // * Delete sharing group
    public async delete(id: string) {
        return this.client.delete(`/sharing_groups/delete/${id}`);
    }

    // * Add an organisation to a sharing group
    public async addOrganisation(sharingGroupId: string, organisationId: string) {
        return this.client.post(`/sharing_groups/addOrg/${sharingGroupId}/${organisationId}`);
    }

    // * Remove an organisation from a sharing group
    public async removeOrganisation(sharingGroupId: string, organisationId: string) {
        return this.client.post(`/sharing_groups/removeOrg/${sharingGroupId}/${organisationId}`);
    }

    // * Add a server to a sharing group
    public async addServer(sharingGroupId: string, serverId: string) {
        return this.client.post(`/sharing_groups/addServer/${sharingGroupId}/${serverId}`);
    }

    // * Remove a server from a sharing group
    public async removeServer(sharingGroupId: string, serverId: string) {
        return this.client.post(`/sharing_groups/removeServer/${sharingGroupId}/${serverId}`);
    }

}