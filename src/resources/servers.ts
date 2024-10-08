import Resource from "./resource";
import type { ImportServerParams, PullTechnique, PushTechnique } from "../types";

export default class Servers extends Resource {
        
    // * List servers
    public async list() {
        return this.client.get(`/servers`);
    }

    // * Add server
    // TODO: Add type
    public async add(data: any) {
        return this.client.post(`/servers/add`, data);
    }

    // * Edit server
    // TODO: Add type
    public async edit(id: string, data: any) {
        return this.client.put(`/servers/edit/${id}`, data);
    }

    // * Delete server
    public async delete(id: string) {
        return this.client.delete(`/servers/delete/${id}`);
    }

    // * Pull server
    public async pull(id: string, technique: PullTechnique) {
        return this.client.get(`/servers/pull/${id}/${technique}`);
    }

    // * Push server
    public async push(id: string, technique: PushTechnique) {
        return this.client.post(`/servers/push/${id}/${technique}`);
    }

    // * Get current instance version
    public async version() {
        return this.client.get(`/servers/getVersion`);
    }

    // * Get current instance PyMISP version
    public async pymispVersion() {
        return this.client.get(`/servers/getPyMISPVersion`);
    }

    // * Get current instance settings and diagnostics
    public async settings() {
        return this.client.get(`/servers/serverSettings`);
    }

    // * Update server
    public async update() {
        return this.client.post(`/servers/update`);
    }

    // * Cache server
    public async cache() {
        return this.client.post(`/servers/cache`);
    }

    // * Create sync
    public async createSync() {
        return this.client.post(`/servers/createSync`);
    }

    // * Get current instance UUID
    public async uuid() {
        return this.client.get(`/servers/getInstanceUUID`);
    }

    // * Get server setting by name
    public async setting(name: string) {
        return this.client.get(`/servers/getSetting/${name}`);
    }

    // * Edit server setting
    public async editSetting(name: string, value: any) {
        return this.client.post(`/servers/serverSettingsEdit/${name}`, { value });
    }

    // * Import server
    public async import(params: ImportServerParams) {
        return this.client.post(`/servers/import`, params);
    }

}