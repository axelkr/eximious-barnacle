import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockObjectStoreBackendService } from '../backend/object-store-backend.service.spec';
import { ObjectStoreBackendService } from '../backend/object-store-backend.service';

import { HeijunkaBoardService } from '../domain-services/heijunka-board.service';
import { MockHeijunkaBoardService } from '../domain-services/heijunka-board.service.spec';
import { TopicService } from '../domain-services/topic.service';
import { MockTopicService } from '../domain-services/topic.service.spec';

import { ContextService } from './context.service';
import { Context } from 'outstanding-barnacle';

describe('ContextService', () => {
  let service: ContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: ObjectStoreBackendService, useClass: MockObjectStoreBackendService },
        { provide: HeijunkaBoardService, useClass: MockHeijunkaBoardService },
        { provide: TopicService, useClass: MockTopicService }
      ]
    });
    service = TestBed.inject(ContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('even if activated multiple times, one deactivation suffices', () => {
    const anId = 'anId';
    const aContext = new Context(anId, anId);
    service.activate(aContext);
    service.activate(aContext);
    service.deactivate(aContext);
    expect(service.isActive(aContext)).toBeFalse();
  });

  it('without any selection, all contexts are active', () => {
    const anId = 'anId';
    const aContext = new Context(anId, anId);
    expect(service.isActive(aContext)).toBeTrue();
  });

  it('if one context is activated, it is only one active', () => {
    const anId = 'anId';
    const anotherId = 'anotherId';
    const aContext = new Context(anId, anId);
    const anotherContext = new Context(anotherId, anotherId);
    service.activate(aContext);
    expect(service.isActive(aContext)).toBeTrue();
    expect(service.isActive(anotherContext)).toBeFalse();
  });
});
