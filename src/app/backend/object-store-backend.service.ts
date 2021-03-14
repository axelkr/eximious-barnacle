import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ObjectEvent, Topic } from 'choicest-barnacle';
import { AppConfig } from '../app.config';
import { Client as BackendClient, EventSourceFactory } from 'prime-barnacle';
import { AngularHttpClientFacade } from './AngularHttpClientFacade';

@Injectable({
  providedIn: 'root'
})

export class ObjectStoreBackendService {
  private readonly endpoint: string;
  private readonly newObjectEventStream: Subject<ObjectEvent>;
  private readonly newTopicsStream: Subject<Topic>;
  private readonly backendClient: BackendClient;

  constructor(private httpClient: HttpClient, private zone: NgZone) {
    if (AppConfig.settings === undefined ) {
      throw new Error('unavailable as not backend is defined');
    }
    this.endpoint = AppConfig.settings.backend.url + ':' + AppConfig.settings.backend.port;
    this.backendClient = new BackendClient(this.endpoint, new EventSourceFactory(), new AngularHttpClientFacade(httpClient));
    this.newObjectEventStream = new Subject<ObjectEvent>();
    this.newTopicsStream = new Subject<Topic>();
    this.connectNewObjectEventStreamWithBackendClient();
    this.connectNewTopicStreamWithBackendClient();
  }

  public storeObjectEvent(objectEvent: ObjectEvent): void {
    this.backendClient.storeObjectEvent(objectEvent);
  }

  public switchToTopic(topic: Topic): void {
    this.backendClient.switchToTopic(topic);
  }

  public getNewObjectEvents(): Observable<ObjectEvent> {
    return this.newObjectEventStream;
  }

  public storeTopic(topic: Topic): void {
    this.backendClient.storeTopic(topic);
  }

  public getNewTopics(): Observable<Topic> {
    return this.newTopicsStream;
  }

  public queryAllTopics(): void {
    this.backendClient.getAllTopics();
  }

  private connectNewObjectEventStreamWithBackendClient() {
    const events = this.backendClient.publishedObjectEvents;
    events.subscribe((objectEvent: ObjectEvent) => {
      this.zone.run(() => {
        this.newObjectEventStream.next(objectEvent);
      });
    });
  }

  private connectNewTopicStreamWithBackendClient() {
    const events = this.backendClient.publishedTopics;
    events.subscribe((topic: Topic) => {
      this.zone.run(() => {
        this.newTopicsStream.next(topic);
      });
    });
  }
}
