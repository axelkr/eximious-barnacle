import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ObjectEvent } from 'outstanding-barnacle';
import { map } from 'rxjs/operators';
import { AppConfig } from '../app.config';

type ObjectEventBackEnd = {
  topic: string;
  time: string;
  id: number;
  eventType: string;
  object: string;
  objectType: string;
  payload: string;
};

@Injectable({
  providedIn: 'root'
})

export class ObjectStoreBackendService {
  private readonly endpoint: string;
  private newObjectEventsStream: Observable<ObjectEvent>;

  constructor(private httpClient: HttpClient, private configuration: AppConfig, private zone: NgZone) {
    this.endpoint = AppConfig.settings.backend.url + ':' + AppConfig.settings.backend.port;
    this.newObjectEventsStream = this.setupObjectEventStream();
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

  public storeObjectEvent(objectEvent: ObjectEvent): void {
    const asJSON = {
      topic: objectEvent.topic,
      eventType: objectEvent.eventType,
      object: objectEvent.object,
      objectType: objectEvent.objectType,
      payload: JSON.stringify(Array.from(objectEvent.payload.entries()))
    };
    const headers = { 'content-type': 'application/json' };
    this.httpClient.post(this.endpoint + '/objectEvent', JSON.stringify(asJSON), { headers }).subscribe();
  }

  public getAllObjectEventsOfTopic(topic: string): Observable<ObjectEvent[]> {
    const allObjectEvents: Observable<ObjectEventBackEnd[]> =
      this.httpClient.get<any[]>(this.endpoint + `/objectEvent?topic=` + topic);
    return map(this.deserializeServerObjectEvent)(allObjectEvents);
  }

  public getNewObjectEvents(): Observable<ObjectEvent> {
    return this.newObjectEventsStream;
  }

  private deserializeServerObjectEvent(jsonBackend: ObjectEventBackEnd[]): ObjectEvent[] {
    const results: ObjectEvent[] = [];
    jsonBackend.forEach(json => {
      results.push(ObjectStoreBackendService.deserializeSingleEvent(json));
    });
    return results;
  }

  private setupObjectEventStream(): Observable<ObjectEvent> {
    const events = new EventSource(this.endpoint + '/newObjectEvents');
    return new Observable((observer: any) => {
      events.onmessage = event => {
        this.zone.run(() => {
          const asObjectEvent = ObjectStoreBackendService.deserializeSingleEvent(JSON.parse(event.data));
          observer.next(asObjectEvent);
        });
      };

      events.onerror = error => {
        this.zone.run(() => {
          console.log('error connecting to newObjectEvents backend: ');
          console.log(error);
          observer.error(error);
        });
      };
    });
  }
}
