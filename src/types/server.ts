export type PullTechnique =
    'full' |
    'incremental' |
    'pull_relevant_clusters';

export type PushTechnique =
    'full' |
    'incremental';

export type ImportServerParams = {
    name: string;
    url: string;
    uuid: string;
    authkey: string;
    Organization: {
        name: string;
    }
}