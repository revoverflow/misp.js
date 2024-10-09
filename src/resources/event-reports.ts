import Resource from "./resource";

export default class EventReports extends Resource {

    // * List event reports
    async list() {
        return this.client.get(`/eventReports/index`);
    }

    // * Get event report by id
    async get(id: string) {
        return this.client.get(`/eventReports/view/${id}`);
    }

    // * Add event report
    async add(eventId: string, data: any) {
        return this.client.post(`/eventReports/add/${eventId}`, data);
    }

    // * Edit event report
    async edit(id: string, data: any) {
        return this.client.post(`/eventReports/edit/${id}`, data);
    }

    // * Delete event report
    async delete(id: string) {
        return this.client.post(`/eventReports/delete/${id}`);
    }
    
    // * Hard delete event report
    async hardDelete(id: string, hardDelete: '0' | '1') {
        return this.client.post(`/eventReports/delete/${id}/${hardDelete}`);
    }

    // * Restore event report
    async restore(id: string) {
        return this.client.post(`/eventReports/restore/${id}`);
    }

    // * Import event report from URL
    async import(eventId: string, url: string) {
        return this.client.post(`/eventReports/inmportReportFromUrl/${eventId}`, { url });
    }

}