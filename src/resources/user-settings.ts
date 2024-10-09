import { UserSettingName, UserSettingSearchFilter } from "../types";
import Resource from "./resource";

export default class UserSettings extends Resource {

    // * Get user settings
    public async list() {
        return this.client.get(`/user_settings`);
    }

    // * Search user settings
    public async search(params: UserSettingSearchFilter) {
        return this.client.post(`/user_settings`, params);
    }

    // * Get user setting by id
    public async get(id: string) {
        return this.client.get(`/user_settings/view/${id}`);
    }

    // * Delete user setting by id
    public async delete(id: string) {
        return this.client.delete(`/user_settings/${id}`);
    }

    // * Get user setting for specific user
    public async getForUser(userId: string, name: string) {
        return this.client.get(`/user_settings/getSetting/${userId}/${name}`);
    }

    // * Set user setting for specific user
    public async setForUser(userId: string, name: UserSettingName, data: any) {
        return this.client.post(`/user_settings/setSetting/${userId}/${name}`, data);
    }

}