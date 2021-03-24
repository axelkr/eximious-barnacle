import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TopicCreateComponent } from './topic-create.component';
import { MockHeijunkaBoardService } from '../../domain-services/heijunka-board.service.spec';
import { HeijunkaBoardService } from '../../domain-services/heijunka-board.service';
import { MockObjectStoreBackendService } from '../../backend/object-store-backend.service.spec';
import { ObjectStoreBackendService } from '../../backend/object-store-backend.service';

describe('TopicCreateComponent', () => {
  let component: TopicCreateComponent;
  let fixture: ComponentFixture<TopicCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopicCreateComponent],
      imports: [
        FormsModule]
      ,
      providers: [
        { provide: HeijunkaBoardService, useClass: MockHeijunkaBoardService },
        { provide: ObjectStoreBackendService, useClass: MockObjectStoreBackendService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
