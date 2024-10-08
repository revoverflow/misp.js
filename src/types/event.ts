/*
export type Event = {
    id: string;
    org_id: string;
    date: string;
    info: string;
    uuid: string;
    published: boolean;
    analysis: string;
    attribute_count: string;
    orgc_id: string;
    timestamp: number;
    distribution: string;
    sharing_group_id: string;
    proposal_email_lock: boolean;
    locked: boolean;
    threat_level_id: string;
    publish_timestamp: string;
    sighting_timestamp: string;
    disable_correlation: boolean;
    extends_uuid: string;
    protected: boolean;
    Org: {
        id: string;
        name: string;
        uuid: string;
    };
    Orgc: {
        id: string;
        name: string;
        uuid: string;
    };
    EventTag: {
        id: string;
        event_id: string;
        tag_id: string;
        local: boolean;
        relationship_type: string;
        Tag: {
            id: string;
            name: string;
            colour: string;
            is_galaxy: boolean;
        };
    }[];
}
*/

import { AttributeCategory } from "./attribute";
import { SearchReturnFormat } from "./search";

export type ThreatLevel = '1' | '2' | '3' | '4';

export type EventRestSearchParams = {
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

export type EventIndexParams = {
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