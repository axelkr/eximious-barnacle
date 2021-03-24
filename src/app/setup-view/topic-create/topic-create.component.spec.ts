import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TopicCreateComponent } from './topic-create.component';
import { MockHeijunkaBoardService } from '../../domain-services/heijunka-board.service.spec';
import { HeijunkaBoardService } from '../../domain-services/heijunka-board.service';

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
        { provide: HeijunkaBoardService, useClass: MockHeijunkaBoardService }
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
