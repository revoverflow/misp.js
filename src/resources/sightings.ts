import { AttributeRestSearchFilter } from "../types";
import Resource from "./resource";

export default class Sightings extends Resource {
    
    // * Get sightings by event id
    public async list(eventId: string) {
        return this.client.get(`/sightings/index/${eventId}`);
    }

    // * Add sightings of a list of values
    public async add(values: string[], timestamp?: string, filters?: AttributeRestSearchFilter) {
        return this.client.post(`/sightings/add`, { values, timestamp, filters });
    }

    // * Add sighting of an attribute
    public async addAttribute(attributeId: string) {
        return this.client.post(`/sightings/add/${attributeId}`);
    }

    // * Delete sighting
    public async delete(sightingId: string) {
        return this.client.post(`/sightings/delete/${sightingId}`);
    }

}