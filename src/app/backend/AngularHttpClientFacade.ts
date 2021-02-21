import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ObjectEvent } from 'happy-barnacle';

import { IHTTPClient, ObjectEventBackEnd } from 'prime-barnacle/dist/IHTTPClient';

export class AngularHttpClientFacade implements IHTTPClient {
    private readonly httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    public static deserializeSingleEvent(json: ObjectEventBackEnd): ObjectEvent {
        return {
            topic: json.topic,
            payload: new Map<string, string>(JSON.parse(json.payload)),
            time: new Date(json.time),
            id: json.id,
            eventType: json.eventType,
            object: json.object,
            objectType: json.objectType
        };
    }

    postJson(url: string, json: Record<string, unknown>): void {
        const headers = { 'content-type': 'application/json' };
        this.httpClient.post(url, JSON.stringify(json), { headers }).subscribe();
    }

    get(url: string): Observable<ObjectEventBackEnd> {
        const reporter = new Subject<ObjectEventBackEnd>();
        this.httpClient.get<any[]>(url).subscribe(allObjects => {
            allObjects.map(aObject => reporter.next(aObject));
        });
        return reporter;
    }
}
