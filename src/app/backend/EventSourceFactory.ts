import { IEventSourceFactory } from 'prime-barnacle';

export class EventSourceFactory implements IEventSourceFactory {
    createEventSource(url: string): EventSource {
        return new EventSource(url);
    }
}
