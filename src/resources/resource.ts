import type { Client } from "../client";

export default class Resource {
    constructor(protected readonly client: Client) {}
}