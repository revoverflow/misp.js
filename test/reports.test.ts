import { describe, expect, test, beforeAll } from "bun:test";
import { Client } from "../src";

describe("Events", () => {
    let client: Client;
    let reportId: string;

    beforeAll(() => {
        client = new Client(process.env.MISP_URL!, process.env.MISP_API_KEY!);
    });

    test("should list events", async () => {
        const events = await client.events.list();
        expect(Array.isArray(events)).toBe(true);
    });

    test("should get event", async () => {
        const event = await client.events.get('1');
        expect(event.Event.id).toBe('1');
    });

    test("should add event", async () => {
        const event = await client.events.add({
            info: "Test Event",
            org_id: "1",
        });

        expect(event.Event.id).toBeDefined();
        reportId = event.Event.id;
    });

    test("should update event", async () => {
        const event = await client.events.edit(reportId, {
            info: "Test Event Updated",
        });

        expect(event.Event.id).toBe(reportId);
    });

    test("should publish event", async () => {
        const event = await client.events.publish(reportId);
        expect(event.success).toBe(true);
    });

    test("should unpublish event", async () => {
        const event = await client.events.unpublish(reportId);
        expect(event.success).toBe(true);
    });

    test("should delete event", async () => {
        const event = await client.events.delete(reportId);
        expect(event.success).toBe(true);
    });
});