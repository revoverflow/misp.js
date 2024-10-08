import { FeedCacheScope } from "../types";
import Resource from "./resource";

export default class Feeds extends Resource {

    // * List feeds
    async list() {
        return this.client.get(`/feeds`);
    }

    // * Get feed by id
    async get(id: string) {
        return this.client.get(`/feeds/${id}`);
    }

    // * Add feed
    // TODO: Add type for data
    async add(data: any) {
        return this.client.post(`/feeds/add`, data);
    }

    // * Edit feed
    // TODO: Add type for data
    async edit(id: string, data: any) {
        return this.client.put(`/feeds/edit/${id}`, data);
    }

    // * Enable feed
    async enable(id: string) {
        return this.client.post(`/feeds/enable/${id}`);
    }

    // * Disable feed
    async disable(id: string) {
        return this.client.post(`/feeds/disable/${id}`);
    }

    // * Cache feeds
    async cache(scope: FeedCacheScope) {
        return this.client.post(`/feeds/cacheFeeds/${scope}`);
    }

    // * Fetch from feed by id
    async fetch(id: string) {
        return this.client.post(`/feeds/fetchFromFeed/${id}`);
    }

    // * Fetch from all feeds
    async fetchAll() {
        return this.client.post(`/feeds/fetchFromAllFeeds`);
    }

}