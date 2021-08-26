import { Stan } from 'node-nats-streaming';
import { Event } from './event';
export declare abstract class Publisher<T extends Event> {
    private client;
    abstract subject: T['subject'];
    constructor(client: Stan);
    publish(data: T['data']): Promise<void>;
}
