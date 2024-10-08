export type AuthKeySearchParams = {
    page?: number;
    limit?: number;
    id?: string;
    uuid?: string;
    authkey_start?: string;
    authkey_end?: string;
    created?: string;
    expiration?: string;
    read_only?: boolean;
    user_id?: string;
    comment?: string;
    allowed_ips?: string;
    last_used?: string;
};