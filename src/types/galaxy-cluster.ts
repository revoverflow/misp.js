export type GalaxyClusterContext = 'all' | 'default' | 'org' | 'deleted';

export type GalaxyClusterSearchFilter = {
    context: GalaxyClusterContext;
    searchall?: string;
}