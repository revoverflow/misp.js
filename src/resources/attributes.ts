import type { AttributeCategory, SearchReturnFormat, ThreatLevel } from "../types";
import Resource from "./resource";

type AttributeContext = 'type' | 'category';
type AttributePercentage = 0 | 1;

type AttributeRestSearchParams = {
    page?: number;
    limit?: number;
    value?: string;
    value1?: string;
    value2?: string;
    type?: string; // TODO: Add type for this
    category?: AttributeCategory;
    org?: string;
    tags?: string[];
    from?: string;
    to?: string;
    last?: number | string;
    eventid?: string;
    withAttachments?: boolean;
    uuid?: string;
    publish_timestamp?: string;
    published?: boolean;
    timestamp?: string;
    attribute_timestamp?: string;
    enforceWarningList?: boolean;
    to_ids?: boolean;
    deleted?: boolean;
    event_timestamp?: string;
    threat_level_id?: ThreatLevel;
    eventinfo?: string;
    sharinggroup?: string[];
    decayingModel?: string;
    score?: string;
    first_seen?: string;
    last_seen?: string;
    includeEventUuid?: boolean;
    includeEventTags?: boolean;
    includeProposals?: boolean;
    requested_attributes?: string[];
    includeContext?: boolean;
    headerless?: boolean;
    includeWarninglistHits?: boolean;
    attackGalaxy?: string;
    object_relation?: string;
    includeSightings?: boolean;
    includeCorrelations?: boolean;
    modelOverrides?: any;
    includeDecayScore?: boolean;
    includeFullModel?: boolean;
    excludeDecayed?: boolean;
    returnFormat?: SearchReturnFormat;
}

export default class Attributes extends Resource {

    // * List attributes
    async list() {
        return this.client.get(`/attributes`);
    }

    // * (restSearch) Search attributes
    async restSearch(params: AttributeRestSearchParams = {}) {
        return this.client.post(`/attributes/restSearch`, params);
    }

    // * Get attribute by id
    async get(id: string) {
        return this.client.get(`/attributes/${id}`);
    }

    // * Add attribute
    async add(eventId: string, data: any) {
        return this.client.post(`/attributes/${eventId}`, data);
    }

    // * Edit attribute
    async edit(id: string, data: any) {
        return this.client.put(`/attributes/edit/${id}`, data);
    }

    // * Delete attribute
    async delete(id: string) {
        return this.client.delete(`/attributes/delete/${id}`);
    }

    // * Restore an attribute
    async restore(id: string) {
        return this.client.post(`/attributes/restore/${id}`);
    }

    // * Add a tag to an attribute
    async addTag(id: string, tag: string, local: boolean) {
        return this.client.post(`/attributes/addTag/${id}/${tag}/local:${local}`);
    }

    // * Remove a tag from an attribute
    async removeTag(id: string, tag: string) {
        return this.client.post(`/attributes/removeTag/${id}/${tag}`);
    }

    // * Get count of attributes per category
    async attributeStatistics(context: AttributeContext, percentage: AttributePercentage) {
        return this.client.get(`/attributes/attributeStatistics/${context}/${percentage}`);
    }

    // * Get a list of all attribute types
    async describeTypes() {
        return this.client.get(`/attributes/describeTypes`);
    }

}