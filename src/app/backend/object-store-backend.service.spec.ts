import { TestBed } from '@angular/core/testing';
import { AppConfig } from '../app.config';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ObjectStoreBackendService } from './object-store-backend.service';
import { Observable, Subject } from 'rxjs';
import { ObjectEvent, Topic } from 'choicest-barnacle';

export class MockObjectStoreBackendService {
  private newObjectEventStream = new Subject<ObjectEvent>();
  private newTopicsStream = new Subject<Topic>();

  public switchToTopic(topic: string): void {
  }

  public queryAllTopics(topic: string): void {
  }

  public getNewObjectEvents(): Observable<ObjectEvent> {
    return this.newObjectEventStream;
  }
  
  public getNewTopics(): Observable<Topic> {
    return this.newTopicsStream;
  }
}

describe('ObjectStoreBackendService', () => {
  let service: ObjectStoreBackendService;
  beforeAll(()=>{
    AppConfig.settings = {
      backend : {
        url: 'http://testURL',
        port: '800'
      },
      title : 'title',
      env: {
        name:'test'
      }
    };
  });

  afterAll(()=>{
    AppConfig.settings = undefined;
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
    providers: [AppConfig]});
    service = TestBed.inject(ObjectStoreBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
