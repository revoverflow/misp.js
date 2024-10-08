import { ThreatLevel } from "./event";
import { SearchReturnFormat } from "./search";

export type AttributeCategory =
    'Internal reference' |
    'Targeting data' |
    'Antivirus detection' |
    'Payload delivery' |
    'Artifacts dropped' |
    'Payload installation' |
    'Persistence mechanism' |
    'Network activity' |
    'Payload type' |
    'Attribution' |
    'External analysis' |
    'Financial fraud' |
    'Support Tool' |
    'Social network' |
    'Person' |
    'Other';

export type AttributeContext =
    'type' |
    'category';

export type AttributePercentage = 0 | 1;

export type AttributeRestSearchParams = {
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
