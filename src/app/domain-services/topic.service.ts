import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Topic } from 'choicest-barnacle';
import { UUIDGenerator } from 'outstanding-barnacle';

import { ObjectStoreBackendService } from '../backend/object-store-backend.service';
import { HeijunkaBoardService } from './heijunka-board.service';

@Injectable({
  providedIn: 'root'
})
export class TopicService implements OnDestroy {
  private topic!: Topic;
  private topics: Topic[] = [];
  private newTopicEvents!: Subscription;

  constructor(private backend: ObjectStoreBackendService, private boardService: HeijunkaBoardService) {
    this.connectWithBackend();
    this.backend.queryAllTopics();
  }

  ngOnDestroy() {
    this.disconnectFromBackend();
  }

  public current(): Topic {
    return this.topic;
  }

  public available(): Topic[] {
    return this.topics;
  }

  public switchTo(topic: Topic): void {
    const switchToCurrentTopic = (topic === this.topic);
    if (switchToCurrentTopic) {
      return;
    }
    this.boardService.switchToTopic(topic);
    this.topic = topic;
    this.backend.switchToTopic(this.topic);
  }

  public create(name: string): void {
    const newTopicId = UUIDGenerator.createUUID();
    const newTopic = new Topic(newTopicId, name);
    this.backend.storeTopic(newTopic);
    this.topics.push(newTopic);
  }

  private connectWithBackend(): void {
    this.newTopicEvents = this.backend.getNewTopics().subscribe(topic => {
      this.topics.push(topic);
      if (this.topic === undefined) {
        this.switchTo(topic);
      }
    });
  }

  private disconnectFromBackend(): void {
    this.newTopicEvents.unsubscribe();
  }
}
