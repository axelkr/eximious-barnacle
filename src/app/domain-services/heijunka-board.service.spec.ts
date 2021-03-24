import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockObjectStoreBackendService } from '../backend/object-store-backend.service.spec';
import { ObjectStoreBackendService } from '../backend/object-store-backend.service';

import { HeijunkaBoardService } from './heijunka-board.service';
import { ProjectCollection, HeijunkaBoard, StateModelCollection } from 'outstanding-barnacle';
import { Topic } from 'choicest-barnacle';

export class MockHeijunkaBoardService {
  private board = HeijunkaBoard.createEmptyHeijunkaBoard();
  private topic!: Topic;

  public switchToTopic(topic: string): void {
  }

  public currentTopic(): Topic {
    return this.topic;
  }

  public availableTopics(): Topic[] {
    return [];
  }

  public getDomainModel(): HeijunkaBoard {
    return this.board;
  }

  public getProjects(): ProjectCollection {
    return this.board.projects;
  }

  public getStateModels(): StateModelCollection {
    return this.board.stateModels;
  }
}

describe('HeijunkaBoardService', () => {
  let service: HeijunkaBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: ObjectStoreBackendService, useClass: MockObjectStoreBackendService }
      ]
    });
    service = TestBed.inject(HeijunkaBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
