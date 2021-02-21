import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ObjectEvent } from 'outstanding-barnacle';
import { AppConfig } from '../app.config';
import { Client as BackendClient, EventSourceFactory } from 'prime-barnacle';
import { AngularHttpClientFacade } from './AngularHttpClientFacade';

@Injectable({
  providedIn: 'root'
})

export class ObjectStoreBackendService {
  private readonly endpoint: string;
  private readonly newObjectEventStream: Subject<ObjectEvent>;
  private readonly backendClient: BackendClient;

  constructor(private httpClient: HttpClient, private zone: NgZone) {
    this.endpoint = AppConfig.settings.backend.url + ':' + AppConfig.settings.backend.port;
    this.backendClient = new BackendClient(this.endpoint, new EventSourceFactory(), new AngularHttpClientFacade(httpClient));
    this.newObjectEventStream = new Subject<ObjectEvent>();
    this.connectNewObjectEventStreamWithBackendClient();
  }

  public storeObjectEvent(objectEvent: ObjectEvent): void {
    this.backendClient.storeObjectEvent(objectEvent);
  }

  public switchToTopic(topic: string): void {
    this.backendClient.switchToTopic(topic);
  }

  public getNewObjectEvents(): Observable<ObjectEvent> {
    return this.newObjectEventStream;
  }

  private connectNewObjectEventStreamWithBackendClient() {
    const events = this.backendClient.publishedObjectEvents;
    events.subscribe((objectEvent: ObjectEvent) => {
      this.zone.run(() => {
        this.newObjectEventStream.next(objectEvent);
      });
    });
  }
}
