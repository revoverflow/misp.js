import Resource from "./resource";

export default class Users extends Resource {
    
    // * List users
    public async list() {
        return this.client.get(`/admin/users`);
    }

    // * Get user by id
    public async get(id: string) {
        return this.client.get(`/admin/users/view/${id}`);
    }

    // * Add user
    // TODO: Add type for data
    public async add(data: any) {
        return this.client.post(`/admin/users/add`, data);
    }

    // * Edit user
    // TODO: Add type for data
    public async edit(id: string, data: any) {
        return this.client.post(`/admin/users/edit/${id}`, data);
    }

    // * Reset user password
    public async resetPassword(id: string, firstTimeReset: '0' | '1' = '0') {
        return this.client.post(`/users/initiatePasswordReset/${id}/${firstTimeReset}`);
    }

    // * Delete user TOTP
    public async deleteTOTP(id: string) {
        return this.client.post(`/users/totp_delete/${id}`);
    }

    // * Delete user
    public async delete(id: string) {
        return this.client.delete(`/admin/users/delete/${id}`);
    }

}