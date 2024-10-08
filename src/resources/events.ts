import type { AttributeCategory, SearchReturnFormat, ThreatLevel } from '../types';
import Resource from './resource';

type EventRestSearchParams = {
    page?: number;
    limit?: number;
    value?: string;
    type?: string; // TODO: Add type for this
    category?: AttributeCategory;
    org?: string;
    tags?: string[];
    event_tags?: string[];
    searchall?: string;
    from?: string;
    to?: string;
    last?: number | string;
    eventid?: string;
    withAttachments?: boolean;
    sharinggroup?: string[];
    metadata?: boolean;
    uuid?: string;
    publish_timestamp?: string;
    timestamp?: string;
    published?: boolean;
    enforceWarningList?: boolean;
    sgReferenceOnly?: boolean;
    requested_attributes?: string[];
    includeContext?: boolean;
    headerless?: boolean;
    includeWarninglistHits?: boolean;
    attackGalaxy?: string;
    to_ids?: boolean;
    deleted?: boolean;
    excludeLocalTags?: boolean;
    date?: string;
    includeSightingdb?: boolean;
    tag?: string;
    object_relation?: string;
    threat_level_id?: ThreatLevel;
    returnFormat?: SearchReturnFormat;
}

type EventIndexParams = {
    page?: number;
    limit?: number;
    sort?: string;
    direction?: 'asc' | 'desc';
    minimal?: boolean;
    attribute?: string;
    eventid?: string;
    datefrom?: string;
    dateuntil?: string;
    org?: string;
    eventinfo?: string;
    tag?: string;
    tags?: string[];
    distribution?: '0' | '1' | '2' | '3' | '4' | '5';
    sharinggroup?: string;
    analysis?: '0' | '1' | '2';
    threatlevel?: ThreatLevel;
    email?: string;
    hasproposal?: '0' | '1';
    timestamp?: string;
    publish_timestamp?: string;
    searchDatefrom?: string;
    searchDateuntil?: string;
}

export default class Events extends Resource {

    // * List events
    async list() {
        return this.client.get(`/events`);
    }

    // * (restSearch) Search events
    async restSearch(params: EventRestSearchParams = {}) {
        return this.client.post(`/events/restSearch`, params);
    }

    // * (index) Search events
    async index(params: EventIndexParams = {}) {
        return this.client.post(`/events/index`, params);
    }

    // * Get event by id
    async get(id: string) {
        return this.client.get(`/events/view/${id}`);
    }

    // * Add event
    // TODO: Add type for data
    async add(data: any) {
        return this.client.post(`/events/add`, data);
    }

    // * Edit event
    // TODO: Add type for data
    async edit(id: string, data: any) {
        return this.client.put(`/events/edit/${id}`, data);
    }

    // * Delete event
    async delete(id: string) {
        return this.client.delete(`/events/delete/${id}`);
    }

    // * Publish event
    async publish(id: string) {
        return this.client.post(`/events/publish/${id}`);
    }

    // * Unpublish event
    async unpublish(id: string) {
        return this.client.post(`/events/unpublish/${id}`);
    }

    // * Add event tag
    async addTag(id: string, tag: string, local: boolean) {
        return this.client.post(`/events/addTag/${id}/${tag}/local:${local}`);
    }

    // * Remove event tag
    async removeTag(id: string, tag: string) {
        return this.client.post(`/events/removeTag/${id}/${tag}`);
    }

}