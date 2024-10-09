export type UserSettingName =
    'publish_alert_filter' |
    'dashboard_access' |
    'dashboard' |
    'homepage' |
    'default_restsearch_parameters' |
    'tag_numerical_value_override' |
    'event_index_hide_columns';

export type UserSettingSearchFilter = {
    id?: string;
    setting?: UserSettingName;
    user_id?: string;
}