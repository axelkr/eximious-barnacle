import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

import { ObjectEvent } from '../objectEvent';
import { map } from 'rxjs/operators';


type ObjectEventBackEnd = {topic: string;
  time: string;
  id: number;
  eventType: string;
  object: string;
  objectType: string;
  payload: string;};


@Injectable({
  providedIn: 'root'
})

export class ObjectStoreBackendService {

  constructor(private httpClient: HttpClient) {
  }

  public storeObjectEvent(objectEvent: ObjectEvent): void {
    const asJSON = {
      topic:objectEvent.topic,
      eventType: objectEvent.eventType,
      object: objectEvent.object,
      objectType: objectEvent.objectType,
      payload: JSON.stringify(Array.from(objectEvent.payload.entries()))
    };
    const headers = { 'content-type': 'application/json'};
    this.httpClient.post('http://localhost:8000/objectEvent',JSON.stringify(asJSON),{headers}).subscribe();
  }

  public getAllObjectEventsOfTopic(topic: string): Observable<ObjectEvent[]> {
    const allObjectEvents: Observable<ObjectEventBackEnd[]> =  this.httpClient.get<any[]>(`http://localhost:8000/objectEvent?topic=`+topic);
    return map(this.deserializeServerObjectEvent)(allObjectEvents);
  }

  private deserializeServerObjectEvent(jsonBackend: ObjectEventBackEnd[]): ObjectEvent[] {
    const results: ObjectEvent[] = [];
    jsonBackend.forEach(json => {
      const result: ObjectEvent = {
        topic:json.topic,
        payload : new Map<string,string>(JSON.parse(json.payload)),
        time : new Date(json.time),
        id : json.id,
        eventType : json.eventType,
        object : json.object,
        objectType : json.objectType
      };
      results.push(result);
    });
    return results;
  }
}
