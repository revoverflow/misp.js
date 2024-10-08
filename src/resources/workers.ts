import Resource from "./resource";
import type { WorkerType } from "../types";

export default class Workers extends Resource {
    
    // * Get workers
    public async list() {
        return this.client.get(`/servers/getWorkers`);
    }

    // * Start worker
    public async start(type: WorkerType) {
        return this.client.post(`/servers/startWorker/${type}`);
    }

    // * Stop worker
    public async stop(pid: number) {
        return this.client.post(`/servers/stopWorker/${pid}`);
    }

    // * Kill all workers
    public async killAll() {
        return this.client.post(`/servers/killAllWorkers`);
    }

    // * Restart workers
    public async restart() {
        return this.client.post(`/servers/restartWorkers`);
    }

    // * Restart dead workers
    public async restartDead() {
        return this.client.post(`/servers/restartDeadWorkers`);
    }

}