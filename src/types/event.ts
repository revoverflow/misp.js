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

export type ThreatLevel = '1' | '2' | '3' | '4';
