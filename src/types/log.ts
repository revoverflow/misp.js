export type ModelName = 
    'AdminSetting' |
    'Allowedlist' |
    'AttachmentScan' |
    'Attribute' |
    'AttributeTag' |
    'AuditLog' |
    'AuthKey' |
    'Bruteforce' |
    'Cerebrate' |
    'Community' |
    'CorrelationExclusion' |
    'Correlation' |
    'Dashboard' |
    'DecayingModelMapping' |
    'DecayingModel' |
    'EventBlocklist' |
    'EventDelegation' |
    'EventGraph' |
    'EventLock' |
    'Event' |
    'EventReport' |
    'EventTag' |
    'FavouriteTag' |
    'Feed' |
    'FuzzyCorrelateSsdeep' |
    'GalaxyClusterBlocklist' |
    'GalaxyCluster' |
    'GalaxyClusterRelation' |
    'GalaxyClusterRelationTag' |
    'GalaxyElement' |
    'Galaxy' |
    'Inbox' |
    'Job' |
    'Log' |
    'MispObject' |
    'Module' |
    'News' |
    'NoticelistEntry' |
    'Noticelist' |
    'NotificationLog' |
    'ObjectReference' |
    'ObjectRelationship' |
    'ObjectTemplateElement' |
    'ObjectTemplate' |
    'Organisation' |
    'OrgBlocklist' |
    'Post' |
    'Regexp' |
    'RestClientHistory' |
    'Role' |
    'Server' |
    'ShadowAttribute' |
    'SharingGroupOrg' |
    'SharingGroup' |
    'SharingGroupServer' |
    'SightingdbOrg' |
    'Sightingdb' |
    'Sighting' |
    'TagCollection' |
    'TagCollectionTag' |
    'Tag' |
    'Task' |
    'TaxonomyEntry' |
    'Taxonomy' |
    'TaxonomyPredicate' |
    'TemplateElementAttribute' |
    'TemplateElementFile' |
    'TemplateElement' |
    'TemplateElementText' |
    'Template' |
    'TemplateTag' |
    'Thread' |
    'ThreatLevel' |
    'User' |
    'UserSetting' |
    'WarninglistEntry' |
    'Warninglist' |
    'WarninglistType';

export type LogActionType = 
    'accept' |
    'accept_delegation' |
    'acceptRegistrations' |
    'add' |
    'admin_email' |
    'attachTags' |
    'auth' |
    'auth_fail' |
    'blocklisted' |
    'captureRelations' |
    'change_pw' |
    'delete' |
    'disable' |
    'discard' |
    'discardRegistrations' |
    'edit' |
    'email' |
    'enable' |
    'enrichment' |
    'error' |
    'export' |
    'fetchEvent' |
    'file_upload' |
    'galaxy' |
    'include_formula' |
    'login' |
    'login_fail' |
    'logout' |
    'merge' |
    'pruneUpdateLogs' |
    'publish' |
    'publish_sightings' |
    'publish alert' |
    'pull' |
    'purge_events' |
    'push' |
    'registration' |
    'registration_error' |
    'remove_dead_workers' |
    'request' |
    'request_delegation' |
    'reset_auth_key' |
    'send_mail' |
    'security' |
    'serverSettingsEdit' |
    'tag' |
    'undelete' |
    'update' |
    'update_database' |
    'update_db_worker' |
    'upgrade_24' |
    'upload_sample' |
    'version_warning' |
    'warning' |
    'wipe_default';

export type LogSearchParams = {
    page?: number;
    limit?: number;
    id?: string;
    title?: string;
    created?: string | string[];
    model?: ModelName;
    model_id?: string;
    action?: LogActionType;
    user_id?: string;
    change?: string;
    email?: string;
    org?: string;
    description?: string;
    ip?: string;
};